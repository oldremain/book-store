import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { fetchBooks, setPage } from "../../../../features/books/booksSlice";

import BookCard from "../bookCard/BookCard";
import UITitle from "../../../UI/title/UiTitle";
import CustomPagination from "../../../UI/pagination/Pagination";
import SelectControl from "../../../UI/select/SelectControl";
import UIBackButton from "../../../UI/button/backButton/UiBackButton";
import Loader from "../../../loader/Loader";

import { UISize } from "../../../../enums/enums";

import s from "../BooksPage.module.scss";

const ResultsPage: React.FC = () => {
    const {
        page,
        data: foundBooks,
        total,
        loading: isLoading,
        searchField,
    } = useAppSelector((state) => state.books);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
        dispatch(fetchBooks({ searchField, page: value }));
    };

    useEffect(() => {
        dispatch(setPage(1)); // обновляем страницу когда вводим новое значение в searchField
    }, [searchField]);

    useEffect(() => {
        const path = searchField ? `/search/${searchField}?page=${page}` : `/new/1`;

        navigate(path);
    }, [searchField, page]);

    return (
        <>
            <UIBackButton />
            <h2>
                <UITitle size={UISize.Large}>{`"${searchField}" Search Results`}</UITitle>
            </h2>
            <div className={s.books_qty}>
                <span>Found {total} books</span>
            </div>
            {/* <SelectControl pageSize={pageSize} handleChange={handleChangeSize} /> */}
            <div className={s.cards_container}>
                {isLoading ? (
                    <Loader />
                ) : (
                    foundBooks.map((book, i) => <BookCard key={book.isbn13 + i} {...book} />)
                )}
            </div>
            {!!foundBooks.length && (
                <CustomPagination
                    page={page}
                    pageSize={"10"}
                    handleChangePage={handleChangePage}
                    itemsCount={+total}
                />
            )}
        </>
    );
};

export default ResultsPage;

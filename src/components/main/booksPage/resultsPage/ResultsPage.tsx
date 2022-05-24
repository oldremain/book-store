import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { fetchBooks } from "../../../../features/books/booksSlice";

import BookCard from "../bookCard/BookCard";
import UITitle from "../../../UI/title/UiTitle";
import CustomPagination from "../../../UI/pagination/Pagination";
import SelectControl from "../../../UI/select/Select";
import UIBackButton from "../../../UI/button/backButton/UiBackButton";
import Loader from "../../../loader/Loader";

import { UISize } from "../../../../enums/enums";

import s from "../BooksPage.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage: React.FC = () => {
    const [paginationPage, setPaginationPage] = useState(1);

    const dispatch = useAppDispatch();
    const {
        data: foundBooks,
        total,
        loading: isLoading,
        searchField,
        isSubmited,
    } = useAppSelector((state) => state.books);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPaginationPage(value);
        dispatch(fetchBooks({ searchField, page: value }));
    };

    const handleBackClick = () => {
        console.log("back");
        //navigate(`/search/${location.state}`);
    };

    useEffect(() => {
        const navigateTo = searchField ? `/search/${searchField}/?page=${paginationPage}` : `/new`;

        navigate(navigateTo);
    }, [searchField, paginationPage]);

    const content = foundBooks.map((book, i) => <BookCard key={book.isbn13 + i} {...book} />);

    return (
        <>
            <UIBackButton onClick={handleBackClick} />
            <h2>
                <UITitle size={UISize.Large}>{`"${searchField}" Search Results`}</UITitle>
            </h2>
            <div className={s.books_qty}>
                <span>Found {total} books</span>
            </div>
            {/* <SelectControl pageSize={pageSize} handleChange={handleChangeSize} /> */}
            <div className={s.cards_container}>{isLoading ? <Loader /> : content}</div>
            {!!foundBooks.length && (
                <CustomPagination
                    page={paginationPage}
                    pageSize={10}
                    handleChange={handleChangePage}
                    itemsCount={+total}
                />
            )}
        </>
    );
};

export default ResultsPage;
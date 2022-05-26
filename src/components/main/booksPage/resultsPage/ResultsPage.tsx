import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { fetchBooks, setPage } from "../../../../features/books/booksSlice";

import BookCard from "../bookCard/BookCard";
import UITitle from "../../../UI/title/UiTitle";
import CustomPagination from "../../../UI/pagination/Pagination";
import SelectControl from "../../../UI/select/SelectControl";
import SelectPriceOrder from "../../../UI/select/SelectPriceOrder";
import UIBackButton from "../../../UI/button/backButton/UiBackButton";
import Loader from "../../../loader/Loader";

import { UISize } from "../../../../enums/enums";

import s from "../BooksPage.module.scss";
import { SelectChangeEvent } from "@mui/material";
import {
    PriceOrder,
    setInitialArray,
    setPageSize,
    sortByPrice,
} from "../../../../features/filter/filterSlice";

const ResultsPage: React.FC = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const navigate = useNavigate();
    const {
        page,
        data: foundBooks,
        total,
        loading: isLoading,
        searchField,
    } = useAppSelector((state) => state.books);
    const { priceOrder, preparedData } = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
        dispatch(fetchBooks({ searchField, page: value }));
    };

    const handleChangePrice = (event: SelectChangeEvent) => {
        dispatch(setPage(1));
        dispatch(sortByPrice({ priceOrder: event.target.value, books: foundBooks }));
    };

    useEffect(() => {
        dispatch(setInitialArray(foundBooks));
        dispatch(setPageSize("10"));
        //dispatch(setPage(1));
        dispatch(sortByPrice({ priceOrder: PriceOrder.INITIAL, books: foundBooks }));
    }, []);

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
            <SelectControl>
                <SelectPriceOrder priceOrder={priceOrder} handleChangePrice={handleChangePrice} />
            </SelectControl>
            <div className={s.cards_container}>
                {isLoading ? (
                    <Loader />
                ) : (
                    preparedData.map((book, i) => <BookCard key={book.isbn13 + i} {...book} />)
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

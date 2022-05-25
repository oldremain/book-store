import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNewBooks } from "../../../../fetchAPI/useNewBooks";
import { useFilter } from "../../../../hooks/useFilter";

import UITitle from "../../../UI/title/UiTitle";
import BookCard from "../bookCard/BookCard";
import CustomPagination from "../../../UI/pagination/Pagination";
import SelectControl from "../../../UI/select/Select";
import Loader from "../../../loader/Loader";

import { UISize } from "../../../../enums/enums";
import { BASE_URL } from "../../../../constants/constants";

import s from "../BooksPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
    setInitialArray,
    setPage,
    setPageSize,
    sortByPrice,
} from "../../../../features/filter/filterSlice";

const InitialPage: React.FC = () => {
    const { newBooks, loading } = useNewBooks(`${BASE_URL}/new`);

    const dispatch = useAppDispatch();
    const { page, pageSize, price, filteredArray } = useAppSelector((state) => state.filter);
    // const { page, pageSize, price, handleChangeSize, handleChangePage, handleChangePrice } =
    //     useFilter();

    const navigate = useNavigate();

    useEffect(() => {
        const path = `/new/${page}`;
        navigate(path);
    }, [page]);

    useEffect(() => {
        dispatch(setInitialArray(newBooks));
        dispatch(setPageSize("5"));
        dispatch(setPage(1));
    }, [newBooks]);

    useEffect(() => {
        console.log("filterdArray", filteredArray);
    }, [filteredArray]);
    // let content = newBooks
    //     .slice((page - 1) * +pageSize, page * +pageSize)
    //     .map((book, i) => <BookCard key={book.isbn13 + i} {...book} />);

    // switch (price) {
    //     case "asc":
    //         {
    //             content = [...newBooks]
    //                 .sort(({ price: a }, { price: b }) => +a.slice(1) - +b.slice(1))
    //                 .slice((page - 1) * +pageSize, page * +pageSize)
    //                 .map((book, i) => <BookCard key={book.isbn13 + i} {...book} />);
    //         }
    //         break;
    //     case "desc":
    //         {
    //             content = [...newBooks]
    //                 .sort(({ price: a }, { price: b }) => +b.slice(1) - +a.slice(1))
    //                 .slice((page - 1) * +pageSize, page * +pageSize)
    //                 .map((book, i) => <BookCard key={book.isbn13 + i} {...book} />);
    //         }
    //         break;
    //     case "":
    //         {
    //             content = [...newBooks]
    //                 .slice((page - 1) * +pageSize, page * +pageSize)
    //                 .map((book, i) => <BookCard key={book.isbn13 + i} {...book} />);
    //         }
    //         break;
    // }

    return (
        <>
            <h2>
                <UITitle size={UISize.Large}>New Releases Books ({newBooks.length})</UITitle>
            </h2>
            <SelectControl
            // priceOrder={price}
            // handleChangePrice={handleChangePrice}
            />
            <div className={s.cards_container}>
                {loading && !filteredArray.length ? (
                    <Loader />
                ) : (
                    filteredArray.map((book, i) => <BookCard key={book.isbn13 + i} {...book} />)
                )}
            </div>
            <CustomPagination itemsCount={newBooks.length} />
        </>
    );
};

export default InitialPage;

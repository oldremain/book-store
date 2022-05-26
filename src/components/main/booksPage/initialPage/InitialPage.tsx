import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
    PriceOrder,
    setInitialArray,
    setPage,
    setPageSize,
    sortByPrice,
} from "../../../../features/filter/filterSlice";
import { useNewBooks } from "../../../../fetchAPI/useNewBooks";

import UITitle from "../../../UI/title/UiTitle";
import BookCard from "../bookCard/BookCard";
import CustomPagination from "../../../UI/pagination/Pagination";
import SelectControl from "../../../UI/select/Select";
import Loader from "../../../loader/Loader";

import { UISize } from "../../../../enums/enums";
import { BASE_URL } from "../../../../constants/constants";

import s from "../BooksPage.module.scss";

const InitialPage: React.FC = () => {
    const { newBooks, loading } = useNewBooks(`${BASE_URL}/new`);
    const { page, pageSize, priceOrder, preparedData } = useAppSelector((state) => state.filter);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    };

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/new/${page}`);
    }, [page]);

    useEffect(() => {
        dispatch(setInitialArray(newBooks));
        dispatch(setPageSize("5"));
        dispatch(setPage(1));
        dispatch(sortByPrice({ priceOrder: PriceOrder.INITIAL, books: newBooks }));
    }, [newBooks]);

    // useEffect(() => {
    //     console.log("filterdArray", preparedData);
    // }, [preparedData]);

    return (
        <>
            <h2>
                <UITitle size={UISize.Large}>New Releases Books ({newBooks.length})</UITitle>
            </h2>
            <SelectControl newBooks={newBooks} priceOrder={priceOrder} pageSize={pageSize} />
            <div className={s.cards_container}>
                {loading && !preparedData.length ? (
                    <Loader />
                ) : (
                    preparedData.map((book, i) => <BookCard key={book.isbn13 + i} {...book} />)
                )}
            </div>
            <CustomPagination
                itemsCount={newBooks.length}
                page={page}
                pageSize={pageSize}
                handleChangePage={handleChangePage}
            />
        </>
    );
};

export default InitialPage;

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
import SelectControl from "../../../UI/select/SelectControl";
import SelectSize from "../../../UI/select/SelectSize";
import SelectPriceOrder from "../../../UI/select/SelectPriceOrder";
import CustomPagination from "../../../UI/pagination/Pagination";
import { SelectChangeEvent } from "@mui/material";
import BookCard from "../bookCard/BookCard";
import Loader from "../../../loader/Loader";

import { UISize } from "../../../../enums/enums";
import { BASE_URL } from "../../../../constants/constants";

import s from "../BooksPage.module.scss";

const InitialPage: React.FC = () => {
    const { newBooks, loading } = useNewBooks(`${BASE_URL}/new`);
    const { page, pageSize, priceOrder, preparedData } = useAppSelector((state) => state.filter);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    };

    const handleChangeSize = (event: SelectChangeEvent) => {
        dispatch(setPageSize(event.target.value));
        dispatch(setPage(1));
    };

    const handleChangePrice = (event: SelectChangeEvent) => {
        dispatch(setPage(1));
        dispatch(sortByPrice({ priceOrder: event.target.value, books: newBooks }));
    };

    useEffect(() => {
        if (!loading) {
            dispatch(setInitialArray(newBooks));
            dispatch(setPageSize("5"));
            dispatch(setPage(1));
            dispatch(sortByPrice({ priceOrder: PriceOrder.INITIAL, books: newBooks }));
        }
    }, [newBooks]);

    useEffect(() => {
        navigate(`/new/${page}`);
    }, [page]);

    return (
        <>
            <h2>
                <UITitle size={UISize.Large}>New Releases Books ({newBooks.length})</UITitle>
            </h2>
            <SelectControl>
                <SelectSize pageSize={pageSize} handleChangeSize={handleChangeSize} />
                <SelectPriceOrder priceOrder={priceOrder} handleChangePrice={handleChangePrice} />
            </SelectControl>
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

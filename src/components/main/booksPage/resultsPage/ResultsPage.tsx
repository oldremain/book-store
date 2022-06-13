import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { fetchBooks } from "../../../../features/books/booksSlice";
import { setPage } from "../../../../features/filter/filterSlice";
import {
    setInitialArray,
    setPageSize,
    sortByPrice,
} from "../../../../features/filter/filterSlice";
import _isEmpty from "lodash.isempty";

import UiBookCard from "../../../UI/bookCard/UiBookCard";
import UITitle from "../../../UI/title/UiTitle";
import CustomPagination from "../../../UI/pagination/Pagination";
import SelectControl from "../../../UI/select/SelectControl";
import SelectPriceOrder from "../../../UI/select/SelectPriceOrder";
import UIBackButton from "../../../UI/button/backButton/UiBackButton";
import Loader from "../../../loader/Loader";
import { SelectChangeEvent } from "@mui/material";

import { UISize, PriceOrder } from "../../../../enums/enums";

import s from "../BooksPage.module.scss";

const ResultsPage: React.FC = () => {
    const [paginationPage, setPaginationPage] = useState(1);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {
        data: foundBooks,
        total,
        loading: isLoading,
        searchField,
    } = useAppSelector((state) => state.books);

    const { priceOrder, preparedData } = useAppSelector((state) => state.filter);
    const isEmptyData = _isEmpty(preparedData); // проверяем наличие данных для рендера карточек

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPaginationPage(value);
        dispatch(fetchBooks({ searchField, page: value }));
    };

    const handleChangePrice = (event: SelectChangeEvent) => {
        dispatch(sortByPrice({ priceOrder: event.target.value, books: foundBooks }));
    };

    useEffect(() => {
        if (!isLoading) {
            dispatch(setInitialArray(foundBooks));
            dispatch(setPageSize("10"));
            dispatch(setPage(1));
            dispatch(sortByPrice({ priceOrder: priceOrder, books: foundBooks }));
        }
    }, [foundBooks]); //инициализируем фильтр дефолтными(фиксированной страницей и размером) значениями после ответа от сервера

    useEffect(() => {
        dispatch(fetchBooks({ searchField, page: paginationPage }));// при возврате с вкладки favourites не обновлялись данные
        const path = `/search/${searchField}?page=${paginationPage}`;
        navigate(path);
    }, [searchField, paginationPage]);

    useEffect(() => {
        setPaginationPage(1);
        dispatch(sortByPrice({ priceOrder: PriceOrder.INITIAL, books: foundBooks }));
    }, [searchField]); // сброс фильтра, когда вводим новое значение в строку поиска

    return (
        <section className={s.section_container}>
            <UIBackButton backTo={"/new/1"} />
            <UITitle size={UISize.Large}>
                {`"${searchField}" Search Results`}
            </UITitle>
            <div className={s.books_qty}>
                <span>Found {total} books</span>
            </div>
            <SelectControl>
                <SelectPriceOrder priceOrder={priceOrder} handleChangePrice={handleChangePrice} />
            </SelectControl>
            <div className={s.cards_container}>
                {isLoading && !isEmptyData ? (
                    <Loader />
                ) : (
                    preparedData.map((book, i) => 
                        <UiBookCard 
                            key={book.isbn13 + i} 
                            {...book}
                            cName={'card__results'} 
                        />)
                )}
            </div>
            {!isEmptyData && (
                <CustomPagination
                    page={paginationPage}
                    pageSize={"10"}
                    handleChangePage={handleChangePage}
                    itemsCount={total}
                />
            )}
        </section>
    );
};

export default ResultsPage;

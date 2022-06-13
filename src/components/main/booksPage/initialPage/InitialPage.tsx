import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
    setInitialArray,
    setPage,
    setPageSize,
    sortByPrice,
} from "../../../../features/filter/filterSlice";
import { useNewBooks } from "../../../../fetchAPI/useNewBooks";
import _isEmpty from "lodash.isempty";

import UITitle from "../../../UI/title/UiTitle";
import UiBookCard from "../../../UI/bookCard/UiBookCard";
import SelectControl from "../../../UI/select/SelectControl";
import SelectSize from "../../../UI/select/SelectSize";
import SelectPriceOrder from "../../../UI/select/SelectPriceOrder";
import CustomPagination from "../../../UI/pagination/Pagination";
import { SelectChangeEvent } from "@mui/material";
import Loader from "../../../loader/Loader";

import { UISize, PriceOrder } from "../../../../enums/enums";
import { BASE_URL } from "../../../../constants/constants";

import s from "../BooksPage.module.scss";

const InitialPage: React.FC = () => {
    const { newBooks, loading } = useNewBooks(`${BASE_URL}/new`);
    const { page, pageSize, priceOrder, preparedData } = useAppSelector((state) => state.filter);
    const isEmptyData = _isEmpty(preparedData); // проверяем наличие данных для рендера карточек

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
        //dispatch(setPage(1));
        dispatch(sortByPrice({ priceOrder: event.target.value, books: newBooks }));
    };

    useEffect(() => {
        if (!loading) {
            dispatch(setInitialArray(newBooks));
            dispatch(setPageSize(pageSize));
            dispatch(setPage(1));
            dispatch(sortByPrice({ priceOrder: PriceOrder.INITIAL, books: newBooks }));
        }
    }, [newBooks]); //инициализуем store первоначальми данными

    useEffect(() => {
        navigate(`/new/${page}`);
    }, [page]); //меняем строку поиска

    return (
        <section className={s.section_container}>
            <UITitle size={UISize.Large}>
                New Releases Books ({newBooks.length})
            </UITitle>
            <SelectControl>
                <SelectSize pageSize={pageSize} handleChangeSize={handleChangeSize} />
                <SelectPriceOrder priceOrder={priceOrder} handleChangePrice={handleChangePrice} />
            </SelectControl>
            <div className={s.cards_container}>
                {loading && isEmptyData ? (
                    <Loader />
                ) : (
                    preparedData.map((book, i) => 
                        <UiBookCard 
                            key={book.isbn13 + i} 
                            {...book}
                            cName={'card__initial'} 
                        />)
                )}
            </div>
            <CustomPagination
                itemsCount={newBooks.length}
                page={page}
                pageSize={pageSize}
                handleChangePage={handleChangePage}
            />
        </section>
    );
};

export default InitialPage;

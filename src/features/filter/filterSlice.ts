import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPreparedData, getSortedData } from "./helpers";
import { IInitialState, ISortParams } from "./types";
import { IBookType } from './../books/types';
import { PriceOrder } from "../../enums/enums";

const initialState: IInitialState = {
    pageSize: "5",
    page: 1,
    priceOrder: PriceOrder.INITIAL,
    books: [],
    preparedData: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setInitialArray(state, { payload }: PayloadAction<IBookType[]>) {
            state.books = payload;
            state.preparedData = payload;
        },
        setPageSize(state, { payload }: PayloadAction<string>) {
            state.pageSize = payload;
            state.preparedData = getPreparedData(state.books, state.page, payload);
        },
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
            state.preparedData = getPreparedData(state.books, payload, state.pageSize);
        },
        sortByPrice(state, { payload }: PayloadAction<ISortParams>) {
            state.priceOrder = payload.priceOrder;

            switch (payload.priceOrder) {
                case PriceOrder.ASC:
                    {
                        const sortedArr = getSortedData(state.books, PriceOrder.ASC);
                        state.preparedData = getPreparedData(sortedArr, state.page, state.pageSize);
                    }
                    break;
                case PriceOrder.DESC:
                    {
                        const sortedArr = getSortedData(state.books, PriceOrder.DESC);
                        state.preparedData = getPreparedData(sortedArr, state.page, state.pageSize);
                    }
                    break;
                case PriceOrder.NONE:
                    {
                        state.books = payload.books;
                        state.preparedData = getPreparedData(
                            payload.books,
                            state.page,
                            state.pageSize
                        );
                    }
                    break;
                default:
                    return state;
            }
        },
    },
});

export const { setInitialArray, setPageSize, setPage, sortByPrice } = filterSlice.actions;

export default filterSlice.reducer;

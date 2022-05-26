import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../components/main/booksPage/bookCard/BookCard";
import { getPreparedData, getSortedData } from "./helpers";

export enum PriceOrder {
    INITIAL = "",
    NONE = "none",
    DESC = "desc",
    ASC = "asc",
}

interface ISort {
    books: IBook[];
    priceOrder: string;
}

interface IInitialState {
    pageSize: string;
    page: number;
    priceOrder: string;
    newBooks: IBook[];
    preparedData: IBook[];
}

const initialState: IInitialState = {
    pageSize: "5",
    page: 1,
    priceOrder: PriceOrder.INITIAL,
    newBooks: [],
    preparedData: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setInitialArray(state, { payload }: PayloadAction<IBook[]>) {
            state.newBooks = payload;
        },
        setPageSize(state, { payload }: PayloadAction<string>) {
            state.pageSize = payload;
            state.preparedData = getPreparedData(state.newBooks, state.page, payload);
        },
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
            state.preparedData = getPreparedData(state.newBooks, payload, state.pageSize);
        },
        sortByPrice(state, { payload }: PayloadAction<ISort>) {
            state.priceOrder = payload.priceOrder;

            switch (payload.priceOrder) {
                case PriceOrder.ASC:
                    {
                        const sortedArr = getSortedData(state.newBooks, PriceOrder.ASC);
                        state.preparedData = getPreparedData(sortedArr, state.page, state.pageSize);
                    }
                    break;
                case PriceOrder.DESC:
                    {
                        const sortedArr = getSortedData(state.newBooks, PriceOrder.DESC);
                        state.preparedData = getPreparedData(sortedArr, state.page, state.pageSize);
                    }
                    break;
                case PriceOrder.NONE:
                    {
                        state.newBooks = payload.books;
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

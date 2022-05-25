import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../components/main/booksPage/bookCard/BookCard";

interface IPayloadSort {
    newBooks: IBook[];
    price?: string;
    page: number;
    pageSize: string;
}

interface IInitialState {
    pageSize: string;
    page: number;
    price: string;
    filteredArray: IBook[];
}

const initialState: IInitialState = {
    pageSize: "5",
    page: 1,
    price: "",
    filteredArray: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setPageSize(state, { payload }: PayloadAction<IPayloadSort>) {
            state.filteredArray = payload.newBooks.slice(
                (payload.page - 1) * +payload.pageSize,
                payload.page * +payload.pageSize
            );
            state.pageSize = payload.pageSize;
            state.page = 1;
        },
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;
        },
        sortByPrice(state, { payload }: PayloadAction<IPayloadSort>) {
            switch (payload.price) {
                case "asc":
                    {
                        state.filteredArray = payload.newBooks
                            .sort(({ price: a }, { price: b }) => +a.slice(1) - +b.slice(1))
                            .slice(
                                (payload.page - 1) * +payload.pageSize,
                                payload.page * +payload.pageSize
                            );
                    }
                    break;
                case "desc":
                    {
                        state.filteredArray = payload.newBooks
                            .sort(({ price: a }, { price: b }) => +b.slice(1) - +a.slice(1))
                            .slice(
                                (payload.page - 1) * +payload.pageSize,
                                payload.page * +payload.pageSize
                            );
                    }
                    break;
                case "":
                    {
                        state.filteredArray = payload.newBooks;
                    }
                    break;
            }
        },
    },
});

export const { setPageSize, setPage, sortByPrice } = filterSlice.actions;

export default filterSlice.reducer;

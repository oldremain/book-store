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
    newBooks: IBook[];
    filteredArray: IBook[];
}

const initialState: IInitialState = {
    pageSize: "5",
    page: 0,
    price: "",
    newBooks: [],
    filteredArray: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setPageSize(state, { payload }: PayloadAction<IPayloadSort>) {
            //console.log(payload.newBooks);
            state.newBooks = payload.newBooks;

            state.filteredArray = payload.newBooks.slice(
                (payload.page - 1) * +payload.pageSize,
                payload.page * +payload.pageSize
            );

            state.pageSize = payload.pageSize;
            state.page = payload.page;
        },
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;

            state.filteredArray = state.newBooks.slice(
                (payload - 1) * +state.pageSize,
                payload * +state.pageSize
            );
        },
        sortByPrice(state, { payload }: PayloadAction<string>) {
            switch (payload) {
                case "asc":
                    {
                        state.filteredArray = state.newBooks
                            .sort(({ price: a }, { price: b }) => +a.slice(1) - +b.slice(1))
                            .slice(
                                (state.page - 1) * +state.pageSize,
                                state.page * +state.pageSize
                            );
                    }
                    break;
                case "desc":
                    {
                        state.filteredArray = state.newBooks
                            .sort(({ price: a }, { price: b }) => +b.slice(1) - +a.slice(1))
                            .slice(
                                (state.page - 1) * +state.pageSize,
                                state.page * +state.pageSize
                            );
                    }
                    break;
                case "":
                    {
                        state.filteredArray = state.newBooks;
                    }
                    break;
            }
        },
    },
});

export const { setPageSize, setPage, sortByPrice } = filterSlice.actions;

export default filterSlice.reducer;

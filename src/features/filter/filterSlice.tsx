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
    page: 1,
    price: "",
    newBooks: [],
    filteredArray: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setInitialArray(state, { payload }: PayloadAction<IBook[]>) {
            state.newBooks = payload;
        },
        setPageSize(state, { payload }: PayloadAction<string>) {
            //console.log(payload.newBooks);

            state.filteredArray = state.newBooks.slice(
                (state.page - 1) * +payload,
                state.page * +payload
            );

            state.pageSize = payload;
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

export const { setInitialArray, setPageSize, setPage, sortByPrice } = filterSlice.actions;

export default filterSlice.reducer;

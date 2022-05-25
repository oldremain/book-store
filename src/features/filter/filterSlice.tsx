import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../components/main/booksPage/bookCard/BookCard";

interface ISort {
    books: IBook[];
    value: string;
}

interface IInitialState {
    pageSize: string;
    page: number;
    filterPrice: string;
    newBooks: IBook[];
    filteredArray: IBook[];
}

const initialState: IInitialState = {
    pageSize: "5",
    page: 1,
    filterPrice: "",
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
            state.pageSize = payload;

            state.filteredArray = state.newBooks.slice(
                (state.page - 1) * +payload,
                state.page * +payload
            );
        },
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload;

            state.filteredArray = state.newBooks.slice(
                (payload - 1) * +state.pageSize,
                payload * +state.pageSize
            );
        },
        sortByPrice(state, { payload }: PayloadAction<ISort>) {
            state.filterPrice = payload.value;

            switch (payload.value) {
                case "asc":
                    {
                        const sortedArr = state.newBooks.sort(
                            ({ price: a }, { price: b }) => +a.slice(1) - +b.slice(1)
                        );
                        state.filteredArray = sortedArr.slice(
                            (state.page - 1) * +state.pageSize,
                            state.page * +state.pageSize
                        );
                    }
                    break;
                case "desc":
                    {
                        const sortedArr = state.newBooks.sort(
                            ({ price: a }, { price: b }) => +b.slice(1) - +a.slice(1)
                        );
                        state.filteredArray = sortedArr.slice(
                            (state.page - 1) * +state.pageSize,
                            state.page * +state.pageSize
                        );
                    }
                    break;
                case "none":
                    {
                        state.newBooks = payload.books;

                        state.filteredArray = payload.books.slice(
                            (state.page - 1) * +state.pageSize,
                            state.page * +state.pageSize
                        );
                    }
                    break;
            }
        },
    },
});

export const { setInitialArray, setPageSize, setPage, sortByPrice } = filterSlice.actions;

export default filterSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../constants/constants";

// BASE_URL = "https://api.itbook.store/1.0"

interface IBookType {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
}

interface IInitialState {
    searchField: string;
    total: string;
    page: string;
    data: IBookType[];
    loading: boolean;
    error: boolean;
    isSubmited: boolean;
}

interface IFetchBooksResponse {
    books: IBookType[];
    // error?: string;
    page: string;
    total: string;
}

interface IQuerryParams {
    searchField: string;
    page: number;
}

const initialState: IInitialState = {
    searchField: "",
    total: "0",
    page: "0",
    data: [],
    loading: false,
    error: false,
    isSubmited: false,
};

export const fetchBooks = createAsyncThunk<
    IFetchBooksResponse,
    IQuerryParams,
    { rejectValue: string }
>("books/fetchBooks", async ({ searchField, page }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/${searchField}?page=${page}`);
        return response.data;
    } catch (e: any) {
        rejectWithValue("Not such a book yet");
    }
});

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setSearchField(state, { payload }: PayloadAction<string>) {
            state.searchField = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.error = false;
                state.loading = true;
                state.isSubmited = true;
            })
            .addCase(
                fetchBooks.fulfilled,
                (state, { payload }: PayloadAction<IFetchBooksResponse>) => {
                    // console.log(action.payload);
                    state.data = payload.books;
                    state.total = payload.total;
                    state.page = payload.page;
                    state.loading = false;
                    state.isSubmited = false;
                }
            )
            .addCase(fetchBooks.rejected, (state, action) => {
                state.error = true;
                state.loading = false;
                state.isSubmited = false;
            });
    },
});

export const { setSearchField } = booksSlice.actions;

export default booksSlice.reducer;

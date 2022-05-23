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
    total: string;
    page: string;
    books: IBookType[];
    loading: boolean;
    error: boolean;
    isSubmited: boolean;
}

const initialState: IInitialState = {
    total: "0",
    page: "0",
    books: [],
    loading: false,
    error: false,
    isSubmited: false,
};

export const fetchBooks = createAsyncThunk<IBookType[], string, { rejectValue: string }>(
    "books/fetchBooks",
    async (searchBook, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/search/${searchBook}`);
            return response.data;
        } catch (e: any) {
            rejectWithValue("Not such a book yet");
        }
    }
);

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.error = false;
                state.loading = true;
                state.isSubmited = true;
            })
            .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<IBookType[]>) => {
                console.log(action.payload);
                state.books = action.payload;
                state.loading = false;
                state.isSubmited = false;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.error = true;
                state.loading = false;
                state.isSubmited = false;
            });
    },
});

export const {} = booksSlice.actions;

export default booksSlice.reducer;

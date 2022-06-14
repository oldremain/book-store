import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import { IOneBookData, IOneBookState } from "./types";

const initialState: IOneBookState = {
    book: {
        title: "",
        subtitle: "",
        language: "",
        authors: "",
        publisher: "",
        isbn10: "",
        isbn13: "",
        pages: "",
        year: "",
        rating: "",
        desc: "",
        price: "",
        image: "",
        pdf: {},
    },
    loading: false,
    error: false,
};

export const fetchOneBook = createAsyncThunk<
    IOneBookData,
    string | undefined,
    { rejectValue: string }
>("oneBook/fetchOneBook", async (isbn, { rejectWithValue }) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 100);
    });

    try {
        const response = await axios.get(`${BASE_URL}/books/${isbn}`);
        return response.data;
    } catch (e: any) {
       return rejectWithValue(e.message);
    }
});

const oneBookSlice = createSlice({
    name: "oneBook",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOneBook.pending, (state, { payload }) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchOneBook.fulfilled, (state, { payload }) => {
                state.book = payload;
                state.loading = false;
            })
            .addCase(fetchOneBook.rejected, (state, { payload }) => {
                state.error = true;
                state.loading = false;
            });
    },
});

export default oneBookSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IFetchBooksResponse, IInitialState, IQuerryParams } from "./types";
import { BASE_URL } from "../../constants/constants";
import axios from "axios";

// BASE_URL = "https://api.itbook.store/1.0"

const initialState: IInitialState = {
    searchField: "",
    total: 0,
    page: 1,
    data: [],
    loading: false,
    error: false,
    //isSubmited: false,
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
       return rejectWithValue("Not such a book yet");
    }
});

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setSearchField(state, { payload }: PayloadAction<string>) {
            state.searchField = payload;
        },
        // setPage(state, { payload }: PayloadAction<number>) {
        //     state.page = payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.error = false;
                state.loading = true;
                //state.isSubmited = true;
            })
            .addCase(
                fetchBooks.fulfilled,
                (state, { payload }: PayloadAction<IFetchBooksResponse>) => {
                    state.data = payload.books;
                    state.total = Math.min(+payload.total, 1000) ;
                    //state.page = payload.page;
                    state.loading = false;
                    //state.isSubmited = false;
                }
            )
            .addCase(fetchBooks.rejected, (state, action) => {
                state.error = true;
                state.loading = false;
                //state.isSubmited = false;
            });
    },
});

export const { setSearchField } = booksSlice.actions;

export default booksSlice.reducer;

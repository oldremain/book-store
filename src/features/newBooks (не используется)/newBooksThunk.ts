import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBook } from "../../components/main/booksPage/bookCard/BookCard";
import { BASE_URL } from "../../constants/constants";

interface fetchNewBooksResponse {
    total: string;
    books: IBook[];
}

export const fetchNewBooks = createAsyncThunk<
    fetchNewBooksResponse,
    undefined,
    { rejectValue: string }
>("newBooks/fetchNewBooks", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_URL}/new`);
        return response.data;
    } catch (e: any) {
        rejectWithValue(e.message);
    }
});

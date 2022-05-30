import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../components/UI/bookCard/UiBookCard";
import { incrementArrayBy } from "../../helpers/books";
import { fetchNewBooks } from "./newBooksThunk";

interface IInitialState {
    total: string;
    newBooks: IBook[];
    loading: boolean;
    error: boolean;
}

const initialState: IInitialState = {
    total: "",
    newBooks: [],
    loading: false,
    error: false,
};

const newBookSlice = createSlice({
    name: "newBooks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNewBooks.pending, (state, { payload }) => {
            state.loading = true;
        });
        builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
            state.total = payload.total;
            state.newBooks = incrementArrayBy<IBook, number>(payload.books, 9).filter(
                (book) => +book.price.slice(1)
            ); //apply function and delete cards with price ($0.00)
            state.loading = false;
        });
        builder.addCase(fetchNewBooks.rejected, (state, { payload }) => {
            state.error = true;
        });
    },
});

export default newBookSlice.reducer;

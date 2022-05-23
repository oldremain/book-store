import { configureStore } from "@reduxjs/toolkit";

import booksSlice from "../features/books/booksSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

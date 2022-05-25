import { configureStore } from "@reduxjs/toolkit";

import booksSlice from "../features/books/booksSlice";
import filterSlice from "../features/filter/filterSlice";
import sidebarSlice from "../features/sidebar/sidebarSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
        sidebar: sidebarSlice,
        filter: filterSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

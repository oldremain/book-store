import { configureStore } from "@reduxjs/toolkit";

import booksSlice from "../features/books/booksSlice";
import oneBookSlice from "../features/book/oneBookSlice";
import filterSlice from "../features/filter/filterSlice";
import sidebarSlice from "../features/sidebar/sidebarSlice";
import favouritesSlice from "../features/favourites/favouritesSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
        oneBook: oneBookSlice,
        sidebar: sidebarSlice,
        filter: filterSlice,
        favourite: favouritesSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

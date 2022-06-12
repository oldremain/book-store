import { configureStore } from "@reduxjs/toolkit";

import booksSlice from "../features/books/booksSlice";
import oneBookSlice from "../features/book/oneBookSlice";
import filterSlice from "../features/filter/filterSlice";
import sidebarSlice from "../features/sidebar/sidebarSlice";
import favouritesSlice from "../features/favourites/favouritesSlice";
import cartSlice from "../features/cart/cartSlice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
        oneBook: oneBookSlice,
        sidebar: sidebarSlice,
        filter: filterSlice,
        favourites: favouritesSlice,
        cart: cartSlice,
        auth: authSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { ICartBook } from './../cart/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavouriteBook } from './../favourites/types';

interface IInitialState {
    books: IFavouriteBook[] | ICartBook[];
    preparedData: IFavouriteBook[] | ICartBook[];
    pageSize: string
}

const initialState: IInitialState = {
    books: [],
    preparedData: [],
    pageSize: '3'
}

const paginationFilterSlice = createSlice({
    name: 'paginationFilter',
    initialState,
    reducers: {
        setInitialArray(state, { payload }: PayloadAction<IFavouriteBook[] | ICartBook[]>) {
            state.books = payload;
            state.preparedData = payload;
        },
        removeItem(state, { payload }: PayloadAction<string>) {
            state.books = state.books.filter(el => Object.keys(el)[0] !== payload)
            state.preparedData = state.preparedData.filter(el => Object.keys(el)[0] !== payload)
            
            localStorage.setItem('favourites', JSON.stringify(state.books))
        },
        pageFilter(state, {payload}: PayloadAction<number>) {
            state.preparedData = state.books.slice((payload - 1) * +state.pageSize, payload * +state.pageSize)
        }

    }
})

//export const {setInitialArray, removeItem, pageFilter } = paginationFilterSlice.actions

export default paginationFilterSlice.reducer
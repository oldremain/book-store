import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const storageData: IFavouriteBook[] = JSON.parse(localStorage.getItem('cart') || '[]')

export interface IFavouriteBook {
    [key: string]: {
        title: string,
        subtitle: string,
        price: string,
        image: string,
        isbn13: string
    }
}

interface IInitialState {
    books: IFavouriteBook[];
    preparedData: IFavouriteBook[];
    pageSize: string
}

const initialState: IInitialState = {
    books: storageData,
    preparedData: [],
    pageSize: '3'
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        toggleFavourite(state, action: PayloadAction<IFavouriteBook>) {
            const isUnique = state.books.some(el => Object.keys(action.payload)[0] in el) 

            if (!isUnique) {
                state.books.push(action.payload)
                localStorage.setItem('favourites', JSON.stringify(state.books))
            } else {
                state.books = state.books.filter(el => Object.keys(el)[0] !== Object.keys(action.payload)[0])
                localStorage.setItem('favourites', JSON.stringify(state.books))
            }
        },
        removeFromFavourite(state, { payload }: PayloadAction<string>) {
            state.books = state.books.filter(el => Object.keys(el)[0] !== payload)
            state.preparedData = state.preparedData.filter(el => Object.keys(el)[0] !== payload)
            localStorage.setItem('favourites', JSON.stringify(state.books))
        },
        pageFilter(state, {payload}: PayloadAction<number>) {
            state.preparedData = state.books.slice((payload - 1) * +state.pageSize, payload * +state.pageSize)
        }

    }
})

export const { toggleFavourite, removeFromFavourite, pageFilter } = favouritesSlice.actions

export default favouritesSlice.reducer
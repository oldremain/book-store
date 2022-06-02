import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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
    preparedData: IFavouriteBook[]
}

const initialState: IInitialState = {
    books: JSON.parse(localStorage.getItem('favourites') || '[]'),
    preparedData: []
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
            localStorage.setItem('favourites', JSON.stringify(state.books))
        },
        pageFilter(state, {payload}) {}

    }
})

export const { toggleFavourite, removeFromFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer
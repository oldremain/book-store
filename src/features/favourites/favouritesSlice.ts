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
    books: IFavouriteBook[]
}

const initialState: IInitialState = {
    books: JSON.parse(localStorage.getItem('favourites') || '[]')
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<IFavouriteBook>) {
            const isUnique = state.books.some(el => Object.keys(action.payload)[0] in el) 

            if (!isUnique) {
                state.books.push(action.payload)
                localStorage.setItem('favourites', JSON.stringify(state.books))
            }
        },
        removeFromFavourite(state, { payload }: PayloadAction<string>) {
            state.books = state.books.filter(el => !el[payload])
        }
    }
})

export const { addFavourite, removeFromFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer
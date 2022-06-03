import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ICart {
    [key: string]: {
        title: string,
        subtitle: string,
        price: string,
        image: string,
        isbn13: string
    }
}

interface IInitialState {
    books: ICart[];
    preparedData: ICart[];
    pageSize: string
}

const initialState: IInitialState = {
    books: JSON.parse(localStorage.getItem('cart') || '[]'),
    preparedData: [],
    pageSize: '3'
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<ICart>) {
            const hasProduct = state.books.some(el => Object.keys(action.payload)[0] in el) 

            if (!hasProduct) {
                state.books.push(action.payload)
                localStorage.setItem('cart', JSON.stringify(state.books))
            } 
        },
        removeFromCart(state, { payload }: PayloadAction<string>) {
            state.books = state.books.filter(el => Object.keys(el)[0] !== payload)
            state.preparedData = state.preparedData.filter(el => Object.keys(el)[0] !== payload)
            localStorage.setItem('cart', JSON.stringify(state.books))
        },
        pageFilter(state, {payload}: PayloadAction<number>) {
            state.preparedData = state.books.slice((payload - 1) * +state.pageSize, payload * +state.pageSize)
        }

    }
})

export const { addProduct, removeFromCart, pageFilter } = cartSlice.actions

export default cartSlice.reducer
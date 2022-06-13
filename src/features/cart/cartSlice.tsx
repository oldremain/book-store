import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBooksPriceInfo } from './cartHelpers';
import { ICartBook, IInitialState, IUserPriceBasket } from './types';

const storageData: ICartBook[] = JSON.parse(localStorage.getItem('cart') || '[]')
const userPriceBasketData: IUserPriceBasket = getBooksPriceInfo(storageData)

const initialState: IInitialState = {
    books: storageData,
    userPriceBasket: userPriceBasketData,
    preparedData: [],
    pageSize: '3'
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<ICartBook>) {
            const hasProduct = state.books.some(el => Object.keys(action.payload)[0] in el) 

            if (!hasProduct) {
                state.books.push(action.payload)
                state.userPriceBasket = getBooksPriceInfo(state.books)
                localStorage.setItem('cart', JSON.stringify(state.books))
            } 
        },
        increaseProductQty(state, { payload }: PayloadAction<string>) {
            state.userPriceBasket[payload].count += 1
        },
        decreaseProductQty(state, { payload }: PayloadAction<string>) {
            state.userPriceBasket[payload].count -= 1
        },
        removeFromCart(state, { payload }: PayloadAction<string>) {
            state.books = state.books.filter(el => Object.keys(el)[0] !== payload)
            state.preparedData = state.preparedData.filter(el => Object.keys(el)[0] !== payload)

            delete state.userPriceBasket[payload]
            localStorage.setItem('cart', JSON.stringify(state.books))
        },
        pageFilter(state, {payload}: PayloadAction<number>) {
            state.preparedData = state.books.slice((payload - 1) * +state.pageSize, payload * +state.pageSize)
        }

    }
})

export const { addProduct, removeFromCart, pageFilter, increaseProductQty, decreaseProductQty } = cartSlice.actions

export default cartSlice.reducer
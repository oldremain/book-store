import { IPriceRef } from "../../components/main/cart/totalPrice/TotalPrice"
import { ICart, IUserPriceBasket } from "./cartSlice"

export const getBooksPriceInfo = (arr: ICart[]):  IUserPriceBasket => {
    const obj: IUserPriceBasket = {}

    arr.forEach(el => {
        obj[Object.keys(el)[0]] = { 
            count: 1,
            price: +el[Object.keys(el)[0]].price.slice(1)
        }
    })

    return obj
}

export const calculatePrice = (obj: IUserPriceBasket) => {
    let price: number = 0

    for (let key in obj) {
        price += obj[key].count * obj[key].price
    }

    return Number(price.toFixed(2))
}

export const calculateVAT = ({ sum }: IPriceRef, vat: number) => {
    return Number((sum * vat).toFixed(2))
}

export const calculateTotal = ({ sum, vat }:  IPriceRef) => {
    return +(sum + vat).toFixed(2)
}
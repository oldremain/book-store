import { IPriceRef } from "../../components/main/cart/totalPrice/TotalPrice"
import { ICartBook, IUserPriceBasket } from './types';

export const getBooksPriceInfo = (arr: ICartBook[]):  IUserPriceBasket => {
    const obj: IUserPriceBasket = {}

    if (arr.length) {
        arr.forEach(el => {
            obj[Object.keys(el)[0]] = { 
                count: 1,
                price: +el[Object.keys(el)[0]].price.slice(1)
            }
        })
    } else {
        obj['key'] = {
            count: 1,
            price: 1
        } //default value
    }

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
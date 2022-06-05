import React, { useEffect, useMemo, useRef } from 'react'
import { IUserPriceBasket } from '../../../../features/cart/cartSlice'
import { useAppSelector } from '../../../../hooks/reduxHooks'

import s from './TotalPrice.module.scss'

const getPrice = (obj: IUserPriceBasket) => {
    let price: number = 0

    for (let key in obj) {
        price += obj[key].count * obj[key].price
    }

    return Number(price.toFixed(2))
}

const calculateVAT = (price: number, vat: number) => {
    return Number((price * vat).toFixed(2))
}

const VAT = 0.2

interface IPriceRef {
    sum: number,
    vat: number,
    total: number
}

const TotalPrice: React.FC = () => {
    const userPriceBasket = useAppSelector(state => state.cart.userPriceBasket)

    const priceRef = useRef<IPriceRef>({
        sum: 0, 
        vat: 0, 
        total: 0
    })

    priceRef.current.sum = getPrice(userPriceBasket)
    priceRef.current.vat = calculateVAT(priceRef.current.sum, VAT)
    priceRef.current.total = +(priceRef.current.sum + priceRef.current.vat).toFixed(2)

    useEffect(() => {
    
    }, [userPriceBasket])

    return (
        <div className={s.price_container}>
            <div className={s.sum_container}>
                <span>Sum total</span>
                <span>{ `$ ${priceRef.current.sum}` }</span>
            </div>
            <div className={s.vat_container}>
                <span>VAT</span>
                <span>{ `$ ${priceRef.current.vat}` }</span>
            </div>
            <div className={s.total_container}>
                <span>TOTAL:</span>
                <span>{ `$ ${priceRef.current.total}` }</span>
            </div>
        </div>
    )
}

export default TotalPrice
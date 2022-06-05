import React, { useState } from 'react'
import { useAppDispatch } from '../../../../hooks/reduxHooks'
import { increaseProductQty } from '../../../../features/cart/cartSlice'
import cn from 'classnames'

import s from './CartCounter.module.scss'

interface ICartCounter {
    cName: string,
    isbn13: string
}

const CartCounter: React.FC<ICartCounter> = ({ cName, isbn13 }) => {
    const [count, setCount] = useState(1)
    const dispatch = useAppDispatch()

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count => count - 1)
        } 
    }

    const increaseCount = () => {
        setCount(count => count + 1)
        dispatch(increaseProductQty(isbn13))
    }
    
    return (
      <div className={cn(s.counter_container, s[cName])}>
          <button className={s.counter_decrement} onClick={decreaseCount}>-</button>
          <span className={s.count}>{ count }</span>
          <button className={s.counter_increment} onClick={increaseCount}>+</button>
      </div>
    )
}   

export default CartCounter
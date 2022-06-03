import React, { useState } from 'react'
import cn from 'classnames'


import s from './CartCounter.module.scss'

interface ICartCounter {
    cName: string
}

const CartCounter: React.FC<ICartCounter> = ({ cName }) => {
    const [count, setCount] = useState(0)

    const decreaseCount = () => {
        setCount(count => count - 1)
    }

    const increaseCount = () => {
        setCount(count => count + 1)
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
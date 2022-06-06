import React from 'react'
import { IFavouriteBook } from '../../../features/favourites/favouritesSlice'

import s from './UiBookAmount.module.scss'

interface IUiBookAmount {
    amount: number;
}

const UiBookAmount: React.FC<IUiBookAmount> = ({ amount }) => {
    return (
          <div className={s.book_amount}>
             <span>{`Found ${ amount } book(s)`}</span>
          </div> 
    )
}

export default UiBookAmount


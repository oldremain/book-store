import React from 'react'
import { ReactComponent as Heart } from '../../../../assets/cardIcons/Heart.svg'
import { addFavourite, IFavouriteBook } from '../../../../features/favourites/favouritesSlice'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'

import s from './UiLikeButton.module.scss'

const UiLikeButton: React.FC = () => {
    const { title, subtitle, isbn13, price, image } = useAppSelector(state => state.oneBook.book)
    const dispatch = useAppDispatch()
    
    const preparedData: IFavouriteBook = {}
    preparedData[isbn13] = {image, title, subtitle, price, isbn13}

    const clickHandler = () => {
        dispatch(addFavourite(preparedData))
    }

    return (
      <div className={s.heart_container}>
         <button className={s.heart_btn} onClick={clickHandler}>
             <Heart/>
          </button>
      </div>
  )
}

export default UiLikeButton
import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { toggleFavourite } from '../../../../features/favourites/favouritesSlice'
import { IFavouriteBook } from '../../../../features/favourites/types'
import { ReactComponent as AddFavouriteIcon } from '../../../../assets/AddFavouriteIcon.svg'
import cn from 'classnames'

import s from './UiLikeButton.module.scss'

const UiLikeButton: React.FC = () => {
    const { title, subtitle, isbn13, price, image } = useAppSelector(state => state.oneBook.book)
    const favouriteBooks = useAppSelector(state => state.favourites.books)
    const isFavourite = favouriteBooks.some(el => Object.keys(el)[0] === isbn13)

    const [fav, setFav] = useState(isFavourite)

    const dispatch = useAppDispatch()

    const preparedData = useRef<IFavouriteBook>({})
    preparedData.current[isbn13] = {
        image, 
        title, 
        subtitle, 
        price, 
        isbn13
    }

    const clickHandler = () => {
        dispatch(toggleFavourite({...preparedData.current}))
        setFav(!fav)
    }
    
    return (
      <div className={s.heart_container}>
         <button className={s.heart_btn} onClick={clickHandler}>
             <AddFavouriteIcon className={cn({[s.heart_active]: fav ? true : false})}/>
          </button>
      </div>
  )
}

export default UiLikeButton
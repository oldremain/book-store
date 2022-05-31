import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { ReactComponent as AddFavouriteIcon } from '../../../../assets/cardIcons/AddFavouriteIcon.svg'
import { toggleFavourite, IFavouriteBook } from '../../../../features/favourites/favouritesSlice'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'

import s from './UiLikeButton.module.scss'

//const favouriteBooks: IFavouriteBook[] = JSON.parse(localStorage.getItem('favourites') || '[]')

const UiLikeButton: React.FC = () => {
    const { title, subtitle, isbn13, price, image } = useAppSelector(state => state.oneBook.book)
    const favouriteBooks = useAppSelector(state => state.favourite.books)
    const isFavourite = favouriteBooks.some(el => Object.keys(el)[0] === isbn13)

    const [fav, setFav] = useState(isFavourite)

    const dispatch = useAppDispatch()

    const preparedData: IFavouriteBook = {}

    const clickHandler = () => {
        dispatch(toggleFavourite(preparedData))
        setFav(!fav)
    }

    useEffect(() => {
        preparedData[isbn13] = {
            image, 
            title, 
            subtitle, 
            price, 
            isbn13
        }
    }, [fav, isbn13])

    return (
      <div className={s.heart_container}>
         <button className={s.heart_btn} onClick={clickHandler}>
             <AddFavouriteIcon className={cn({[s.heart_active]: fav ? true : false})}/>
          </button>
      </div>
  )
}

export default UiLikeButton
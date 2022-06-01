import React, { useEffect } from 'react'
import { UISize } from '../../../enums/enums'
import { IFavouriteBook, removeFromFavourite, toggleFavourite } from '../../../features/favourites/favouritesSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import UiBookCard from '../../UI/bookCard/UiBookCard'
import UIBackButton from '../../UI/button/backButton/UiBackButton'
import UITitle from '../../UI/title/UiTitle'

import ClearIcon from '@mui/icons-material/Clear';

import s from './Favourites.module.scss'

const getFavouritesArray = (state: IFavouriteBook[]) => {
    return state.map(el => Object.values(el)).flat()
}

const Favourites: React.FC = () => {
    const favouriteBooks = useAppSelector(state => getFavouritesArray(state.favourite.books))
    // const preparedData = useAppSelector(state => state.favourite.books)
    const dispatch = useAppDispatch()

    const handleClick = (id: string) => { 
        dispatch(removeFromFavourite(id))
    }

    useEffect(() => {
        console.log(favouriteBooks)
    }, [])
   

    return (
        <section className={s.section_container}>
            <UIBackButton backTo={"/new/1"} />
            <h2>
                <UITitle size={UISize.Large}>{'Favourites'}</UITitle>
            </h2>

            <div className={s.favourites_card}>
                {favouriteBooks.map(book => 
                            <UiBookCard 
                                key={book.isbn13}
                                cName='book_card__favourites'
                                {...book} 
                            >
                                <ClearIcon 
                                    key={book.isbn13 + book.price}
                                    className={s.clear_icons} 
                                    onClick={() => handleClick(book.isbn13)}
                                /> 
                            </UiBookCard>
                    )
                }
            </div>
        </section>
  )
}

export default Favourites
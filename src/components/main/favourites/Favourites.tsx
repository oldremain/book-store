import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { removeFromFavourite } from '../../../features/favourites/favouritesSlice'
import { getBookData } from './helpers'

import UiBookCard from '../../UI/bookCard/UiBookCard'
import UIBackButton from '../../UI/button/backButton/UiBackButton'
import UITitle from '../../UI/title/UiTitle'
import EmptyPage from './EmptyPage'
import ClearIcon from '@mui/icons-material/Clear';
import { UISize } from '../../../enums/enums'

import s from './Favourites.module.scss'

const Favourites: React.FC = () => {
    const favouriteBooks = useAppSelector(state => getBookData(state.favourite.books))
    const dispatch = useAppDispatch()

    const handleClick = (id: string) => { 
        dispatch(removeFromFavourite(id))
    }
   
    return (
        <section className={s.section_container}>
            <UIBackButton/>
            <h2>
                <UITitle size={UISize.Large}>{'Favourites'}</UITitle>
            </h2>
           
            {!favouriteBooks.length 
                ? 
                    <EmptyPage/>
                :  
                    <div className={s.favourites_card}>
                        {favouriteBooks.map(book => 
                            <UiBookCard 
                                key={book.isbn13}
                                cName='card__favourites'
                                {...book} 
                            >
                                <ClearIcon 
                                    key={book.isbn13 + book.price}
                                    className={s.clear_icon} 
                                    onClick={() => handleClick(book.isbn13)}
                                /> 
                            </UiBookCard>
                            )
                        }
                    </div>}
        </section>
  )
}

export default Favourites
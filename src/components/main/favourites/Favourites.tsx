import React, { useEffect } from 'react'
import { UISize } from '../../../enums/enums'
import { IFavouriteBook } from '../../../features/favourites/favouritesSlice'
import { useAppSelector } from '../../../hooks/reduxHooks'
import UiBookCard from '../../UI/bookCard/UiBookCard'
import UIBackButton from '../../UI/button/backButton/UiBackButton'
import UITitle from '../../UI/title/UiTitle'

import s from './Favourites.module.scss'

const getFavouritesArray = (state: IFavouriteBook[]) => {
    return state.map(el => Object.values(el)).flat()
}

const Favourites: React.FC = () => {
    const favouriteBooks = useAppSelector(state => getFavouritesArray(state.favourite.books))

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
                        <>
                            <UiBookCard 
                                key={book.isbn13}
                                cName='book_card__favourites'
                                {...book} 
                            />
                            {/* <div className={s.favourites_separator}></div>  */}
                        </>
                    )
                }
            </div>
        </section>
  )
}

export default Favourites
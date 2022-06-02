import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { pageFilter, removeFromFavourite } from '../../../features/favourites/favouritesSlice'
import { getBookData } from './helpers'

import UiBookCard from '../../UI/bookCard/UiBookCard'
import UIBackButton from '../../UI/button/backButton/UiBackButton'
import UITitle from '../../UI/title/UiTitle'
import EmptyPage from './EmptyPage'
import ClearIcon from '@mui/icons-material/Clear';
import { UISize } from '../../../enums/enums'
import CustomPagination from '../../UI/pagination/Pagination'

import s from './Favourites.module.scss'

const Favourites: React.FC = () => {
    const [page, setPage] = useState(1)
    const preparedData = useAppSelector(state => getBookData(state.favourite.preparedData))
    const { pageSize, books } = useAppSelector(state => state.favourite)
    const dispatch = useAppDispatch()

    const handleClick = (id: string) => { 
        dispatch(removeFromFavourite(id))
    }

    const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        dispatch(pageFilter(value))
    }

    useEffect(() => {
        if (!preparedData.length && books.length && page !== 1) {
            setPage(page => page - 1)
            dispatch(pageFilter(page - 1))
        }

        console.log((page))
    }, [preparedData])

    useEffect(() => {
        dispatch(pageFilter(page))
    }, [])
   
    return (
        <section className={s.section_container}>
            <UIBackButton/>
            <h2>
                <UITitle size={UISize.Large}>{'Favourites'}</UITitle>
            </h2>
           
            {!books.length 
                ? 
                  <EmptyPage/>
                :  
                  <>
                    <div className={s.favourites_card}>
                        {preparedData.map(book => 
                          <UiBookCard 
                              key={book.isbn13}
                              cName='card__favourites'
                              {...book}>
                              <ClearIcon 
                                key={book.isbn13 + book.price}
                                className={s.clear_icon} 
                                onClick={() => handleClick(book.isbn13)}
                              /> 
                          </UiBookCard>
                          )
                        }
                    </div>
                    <CustomPagination 
                        page={page}
                        pageSize={pageSize} 
                        itemsCount={books.length} 
                        handleChangePage={handleChangePage}
                    />
                </>
            }
        </section>
    )
}

export default Favourites
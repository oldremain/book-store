import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { pageFilter, removeFromFavourite } from '../../../features/favourites/favouritesSlice'
import { getBookData } from './helpers'

import UiBookCard from '../../UI/bookCard/UiBookCard'
import UIBackButton from '../../UI/button/backButton/UiBackButton'
import UITitle from '../../UI/title/UiTitle'
import UiBookAmount from '../../UI/bookAmount/UiBookAmount';
import CustomPagination from '../../UI/pagination/Pagination'
import UiEmptyPage from '../../UI/emptyPage/UiEmptyPage'
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { UISize } from '../../../enums/enums'

import s from './Favourites.module.scss'

const Favourites: React.FC = () => {
    const [page, setPage] = useState(1)
    const preparedData = useAppSelector(state => getBookData(state.favourites.preparedData))
    const { pageSize, books } = useAppSelector(state => state.favourites)
    const dispatch = useAppDispatch()

    const handleClearClick = (id: string) => { 
        dispatch(removeFromFavourite(id))
    }

    const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        dispatch(pageFilter(value))
    }

    useEffect(() => {
        if (!preparedData.length && books.length && page !== 1) {
            setPage(page => page - 1)
            dispatch(pageFilter(page - 1)) // Проверка если удаляем ВСЕ книги не с первой страницы
        } 
         else if (!preparedData.length && books.length && page === 1) {
            setPage(1)
            dispatch(pageFilter(1))  // Аналогично с первой
        }
         else if (preparedData.length < 3 && books.length) {
            if (books.length >= page * +pageSize) {
                dispatch(pageFilter(page))
            } else {
                return // берем книжки с конца или не трогаем если длина массива равна длине массива с учетом текущей страницы
            }
        }
    }, [preparedData, books, page])

    useEffect(() => {
        dispatch(pageFilter(page))
    }, [])
   
    return (
        <section className={s.section_container}>
            <UIBackButton />

            <UITitle size={UISize.Large}>
                {`Favourites`}
            </UITitle>
           
            {!books.length 
                ? 
                  <UiEmptyPage text='No favourites yet !'>
                      <FavoriteIcon />
                  </UiEmptyPage>
                :  
                  <>
                    {books.length && 
                        <UiBookAmount 
                            amount={books.length}
                        />
                    }
                    <div className={s.favourites_card}>
                        {preparedData.map(book => 
                          <UiBookCard 
                              key={book.isbn13}
                              cName='card__favourites'
                              onButtonClick={() => handleClearClick(book.isbn13)}
                              {...book}
                            >
                                    <ClearIcon 
                                      key={book.isbn13 + book.price}
                                      className={s.clear_icon} 
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
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { pageFilter, removeFromCart } from '../../../features/cart/cartSlice'
import { getBookData } from '../favourites/helpers'

import UiBookCard from '../../UI/bookCard/UiBookCard'
import UIBackButton from '../../UI/button/backButton/UiBackButton'
import UITitle from '../../UI/title/UiTitle'
import UiBookAmount from '../../UI/bookAmount/UiBookAmount'
import TotalPrice from './totalPrice/TotalPrice'
import UiEmptyPage from '../../UI/emptyPage/UiEmptyPage'
import CustomPagination from '../../UI/pagination/Pagination'
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { UISize } from '../../../enums/enums'

import s from './Cart.module.scss'

const Cart: React.FC = () => {
    const [page, setPage] = useState(1)
    const preparedData = useAppSelector(state => getBookData(state.cart.preparedData))
    const { books, pageSize } = useAppSelector(state => state.cart)

    const dispatch = useAppDispatch()

    const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        dispatch(pageFilter(value))
    }

    const handleClearClick = (id: string) => { 
        dispatch(removeFromCart(id))
    }

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
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
                {`Cart`}
            </UITitle>

            {!books.length 
                ? 
                  <UiEmptyPage text='Cart is empty !'>
                      <ShoppingBasketIcon />
                  </UiEmptyPage>
                :  
                  <>
                     { books.length && 
                         <UiBookAmount 
                             amount={books.length}
                         />
                     }
                    <div className={s.store_card}>
                        {preparedData.map(book => 
                          <UiBookCard 
                              key={book.isbn13}
                              cName='card__store'
                              onLinkClick={handleLinkClick}
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
                    <TotalPrice/>
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

export default Cart
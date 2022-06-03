import React from 'react'

import UIBackButton from '../../UI/button/backButton/UiBackButton'
import UITitle from '../../UI/title/UiTitle'
import { UISize } from '../../../enums/enums'

import s from './Cart.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { getBookData } from '../favourites/helpers'
import UiEmptyPage from '../../UI/emptyPage/UiEmptyPage'
import UiBookCard from '../../UI/bookCard/UiBookCard'
import { removeFromCart } from '../../../features/cart/cartSlice'
import ClearIcon from '@mui/icons-material/Clear';


const Cart: React.FC = () => {
    const books = useAppSelector(state => getBookData(state.cart.books))
    const dispatch = useAppDispatch()

    const handleClick = (id: string) => { 
        dispatch(removeFromCart(id))
    }

    return (
      <section className={s.section_container}>
              <UIBackButton/>
              <h2>
                  <UITitle size={UISize.Large}>{'Cart'}</UITitle>
              </h2>

              {!books.length 
                  ? 
                    <UiEmptyPage text='Cart is empty !'/>
                  :  
                    <>
                      <div className={s.favourites_card}>
                          {books.map(book => 
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
                      {/* <CustomPagination 
                          page={page}
                          pageSize={pageSize} 
                          itemsCount={books.length} 
                          handleChangePage={handleChangePage}
                      /> */}
                  </>
              }
          </section>
    )
}

export default Cart
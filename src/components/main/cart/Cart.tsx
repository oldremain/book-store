import React from 'react'

import UIBackButton from '../../UI/button/backButton/UiBackButton'
import UITitle from '../../UI/title/UiTitle'
import { UISize } from '../../../enums/enums'

import s from './Cart.module.scss'

const Cart: React.FC = () => {
  return (
    <section className={s.section_container}>
            <UIBackButton/>
            <h2>
                <UITitle size={UISize.Large}>{'Cart'}</UITitle>
            </h2>
           
            {/* {!books.length 
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
            } */}
        </section>
  )
}

export default Cart
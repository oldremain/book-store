import React from 'react'
import { ReactComponent as AddFavouriteIcon } from '../../../assets/cardIcons/AddFavouriteIcon.svg'

import s from './Favourites.module.scss'

const EmptyPage: React.FC = () => {
  return (
        <div className={s.emptyPage_container}>
            <div className={s.image_container}>
                 <AddFavouriteIcon className={s.image}/>
            </div>
            <div className={s.emptyPage_text}>
                <p>No favourites yet !</p>
            </div>
        </div>
  )
}

export default EmptyPage
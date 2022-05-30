import React from 'react'
import { UISize } from '../../../enums/enums'
import { useAppSelector } from '../../../hooks/reduxHooks'
import UiBookCard from '../../UI/bookCard/UiBookCard'
import UIBackButton from '../../UI/button/backButton/UiBackButton'
import UITitle from '../../UI/title/UiTitle'

import s from './Favourites.module.scss'

const Favourites: React.FC = () => {

    return (
        <section className={s.section_container}>
            <UIBackButton backTo={"/new/1"} />
            <h2>
                <UITitle size={UISize.Large}>{'Favourites'}</UITitle>
            </h2>
            {/* <UiBookCard {...preparedData[0]} cName='book_card__favourites'/> */}
            <h1>Hello</h1>
        </section>
  )
}

export default Favourites
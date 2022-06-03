import React from 'react'

import s from './UiEmptyPage.module.scss'

interface IEmptyPage {
    text: string
    children?: React.ReactNode
}

const UiEmptyPage: React.FC<IEmptyPage> = ({ text, children }) => {
  return (
        <div className={s.emptyPage_container}>
            <div className={s.image_container}>
                 { children }
            </div>
            <div className={s.emptyPage_text}>
                <p>{ text }</p>
            </div>
        </div>
  )
}

export default UiEmptyPage
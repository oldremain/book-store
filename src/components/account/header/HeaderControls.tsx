import React from 'react'
import HomeButton from './HomeButton'
import LogOut from './LogOut'

import s from '../Account.module.scss'

const HeaderControls: React.FC = () => {
    return (
        <div className={s.controls_container}>
            <HomeButton/>
            <LogOut/>
        </div>
    )
}   

export default HeaderControls
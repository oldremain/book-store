import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import UIBackButton from '../UI/button/backButton/UiBackButton';
import AccountHeader from './header/AccountHeader';
import Greeting from './Greeting';
import Profile from './profile/Profile';

import s from './Account.module.scss'

const Account: React.FC = () => {
    const isLogged = useAppSelector(state => state.auth.isLogged)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!isLogged && location.pathname === '/account') {
            navigate('/account/auth') //перенаправляем route если повторно щёлкаем на аккаунт
        } else if (isLogged) {
            navigate('/account')
        }
        //console.log(location)
    }, [isLogged, location.pathname])
   
    return (
      <section className={s.section_container}>
            {isLogged && <>
                <UIBackButton backTo='/new'/>
                <AccountHeader/>
                <Greeting/>
                <Profile/>
            </>}
          <Outlet/>
      </section> 
    )
}

export default Account
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { UISize } from '../../enums/enums';
import UIBackButton from '../UI/button/backButton/UiBackButton';
import UITitle from '../UI/title/UiTitle';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import Form from './form/Form'

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
              {/* <UIBackButton /> */}
              <h2>
                  <UITitle size={UISize.Large}>
                      {`My account`}
                  </UITitle>
              </h2> 
          </>}
          <Outlet/>
      </section> 
    )
}

export default Account
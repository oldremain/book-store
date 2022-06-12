import React, { useState } from 'react'

import { UISize } from '../../enums/enums';
import UIBackButton from '../UI/button/backButton/UiBackButton';
import UITitle from '../UI/title/UiTitle';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import Form from './form/Form'

import s from './Account.module.scss'
import { useAppSelector } from '../../hooks/reduxHooks';
import { Outlet } from 'react-router-dom';

const Account: React.FC = () => {
    const isLogged = useAppSelector(state => state.auth.isLogged)
   
    return (
      <section className={s.section_container}>
          {isLogged && <>
              <UIBackButton />
              <h2>
                  <UITitle size={UISize.Large}>
                      {`My account`}
                  </UITitle>
              </h2> 
          </>}
          <Outlet/>
          {/* <Form /> */}
      </section> 
    )
}

export default Account
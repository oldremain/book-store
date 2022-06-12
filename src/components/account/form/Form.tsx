import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cn from 'classnames';

import SignIn from '../signin/SignIn';
import SignUp from '../signup/SignUp';

import s from './Form.module.scss'

const Form:React.FC = () => {
    const [active, setActive] = useState('login')
    
    const handleLoginClick = () => {
        setActive('login')
    }
    const handleRegisterClick = () => {
        setActive('register')
    }

    return (
      <div className={s.form_container}>
                <Tabs className={s.tabs}>
                    <TabList className={s.tabs_list}>
                      <Tab 
                          className={cn(s.tab_item, {[s['tab_item--selected']]: active === 'login' ? true : false})}
                          onClick={handleLoginClick}
                      >
                              Sign In
                      </Tab>
                      <Tab 
                          className={cn(s.tab_item, {[s['tab_item--selected']]: active === 'register' ? true : false})}
                          onClick={handleRegisterClick}
                      >
                          Sign Up
                      </Tab>
                    </TabList>

                    <TabPanel className={cn(s.tab_panel, {[s['tab_panel--selected']]: active === 'login' ? true : false})}>
                        <SignIn />
                    </TabPanel>
                    <TabPanel className={cn(s.tab_panel, {[s['tab_panel--selected']]: active === 'register' ? true : false})} >
                        <SignUp />
                    </TabPanel>
                </Tabs>
            </div>
    )
}

export default Form
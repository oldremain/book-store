import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cn from 'classnames';

import { UISize } from '../../enums/enums';
import UIBackButton from '../UI/button/backButton/UiBackButton';
import UITitle from '../UI/title/UiTitle';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';

//import 'react-tabs/style/react-tabs.scss';
import s from './Form.module.scss'


const Form: React.FC = () => {
    const [active, setActive] = useState(true)

    const handleClick = () => {
        setActive(!active)
    }

    return (
      <section className={s.section_container}>
          {/* <UIBackButton />
          <h2>
              <UITitle size={UISize.Large}>
                  {`My account`}
              </UITitle>
          </h2> */}
          <div className={s.form_container}>
              <Tabs className={s.tabs}>
                  <TabList className={s.tabs_list}>
                    <Tab 
                        className={cn(s.tab_item, {[s['tab_item--selected']]: active})}
                        onClick={handleClick}
                    >
                            Sign In
                    </Tab>
                    <Tab 
                        className={cn(s.tab_item, {[s['tab_item--selected']]: !active})}
                        onClick={handleClick}
                    >
                        Sign Up
                    </Tab>
                  </TabList>

                  <TabPanel className={cn(s.tab_panel, {[s['tab_panel--selected']]: active})}>
                      <SignIn />
                  </TabPanel>
                  <TabPanel className={cn(s.tab_panel, {[s['tab_panel--selected']]: !active})}>
                      <SignUp />
                  </TabPanel>
              </Tabs>
          </div>
      </section> 
    )
}

export default Form
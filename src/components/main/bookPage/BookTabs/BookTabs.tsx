import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cn from 'classnames';

import s from './BookTabs.module.scss'

interface IBookTabsProps {
    desc: string
}

const BookTabs: React.FC<IBookTabsProps> = ({ desc }) => {
    const [active, setActive] = useState('desc')

    const handleDescClick = () => {
        setActive('desc')
    }
    const handleAuthorClick = () => {
        setActive('author')
    }
    const handleReviewsClick = () => {
        setActive('reviews')
    }

    return (
        <Tabs className={s.tabs}>
            <TabList className={s.tab_list}>
                <Tab 
                    className={cn(s.tab_item, {[s['tab_item--selected']]: active === 'desc' ? true : false})}
                    onClick={handleDescClick}
                    >
                    Description
                </Tab>
                <Tab 
                    className={cn(s.tab_item, {[s['tab_item--selected']]: active === 'author' ? true : false})}
                    onClick={handleAuthorClick}
                    >
                        Authors
                </Tab>
                <Tab  
                    className={cn(s.tab_item, {[s['tab_item--selected']]: active === 'reviews' ? true : false})}
                    onClick={handleReviewsClick}
                    >
                        Reviews
                </Tab>
            </TabList>
    
            <TabPanel className={cn(s.tab_panel, {[s['tab_panel--selected']]: active === 'desc' ? true : false})}>
                <p>{desc}</p>
            </TabPanel >
            <TabPanel className={cn(s.tab_panel, {[s['tab_panel--selected']]: active === 'author' ? true : false})}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iste et soluta, fuga quidem consequuntur. Alias voluptatum et ipsum veritatis repudiandae, aliquid incidunt eum dolorem cum nobis unde iure consectetur!
                </p>
            </TabPanel>
            <TabPanel className={cn(s.tab_panel, {[s['tab_panel--selected']]: active === 'reviews' ? true : false})}>
                <p style={{fontStyle: 'italic'}}>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum in, officia deserunt asperiores, magni vel molestias alias, unde a quia vero iste! Mollitia, ipsum exercitationem odio ad beatae voluptatem ipsa!"</p>
            </TabPanel>
        </Tabs>
    )   
};

  export default BookTabs
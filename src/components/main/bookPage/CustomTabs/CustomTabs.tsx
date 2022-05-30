import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.scss';
import  './CustomTabs.scss'

interface ICustomTabs {
    desc: string
}

const CustomTabs: React.FC<ICustomTabs> = ({ desc }) => (
    <Tabs>
      <TabList>
        <Tab >Description</Tab>
        <Tab >Authors</Tab>
        <Tab >Reviews</Tab>
      </TabList>
  
      <TabPanel>
        <p>{desc}</p>
      </TabPanel>
      <TabPanel>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iste et soluta, fuga quidem consequuntur. Alias voluptatum et ipsum veritatis repudiandae, aliquid incidunt eum dolorem cum nobis unde iure consectetur!
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa architecto, fugit, porro iste quidem eum possimus dicta inventore magnam eius nam dolore blanditiis numquam nihil quod recusandae natus eos dolorum.    
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae ratione, optio animi delectus, maxime atque voluptas accusantium earum ipsum adipisci totam nesciunt cum reiciendis beatae sapiente corporis, id eos?</p>
      </TabPanel>
      <TabPanel>
        <p style={{fontStyle: 'italic'}}>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum in, officia deserunt asperiores, magni vel molestias alias, unde a quia vero iste! Mollitia, ipsum exercitationem odio ad beatae voluptatem ipsa!"</p>
      </TabPanel>
    </Tabs>
  );

  export default CustomTabs
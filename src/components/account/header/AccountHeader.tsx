import React from 'react'

import UITitle from '../../UI/title/UiTitle'
import HeaderControls from './HeaderControls'
import { UISize } from '../../../enums/enums'

import s from '../Account.module.scss'

const AccountHeader: React.FC = () => {
    return (
      <div className={s.account_header}>
            <UITitle size={UISize.Large}>
                        {`My account`}
            </UITitle>
            <HeaderControls />
     </div> 
    )
}

export default AccountHeader
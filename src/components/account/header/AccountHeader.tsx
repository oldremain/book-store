import React from 'react'
import { UISize } from '../../../enums/enums'
import UITitle from '../../UI/title/UiTitle'
import HomeButton from './HomeButton'
import LogOut from './LogOut'

import s from '../Account.module.scss'
import HeaderControls from './HeaderControls'

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
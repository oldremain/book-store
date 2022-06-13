import React from 'react'
import { MdLogout } from 'react-icons/md';
import { logOut } from '../../../features/auth/authSlice';
import { useAppDispatch } from '../../../hooks/reduxHooks';

import s from '../Account.module.scss'

const HomeButton: React.FC = () => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(logOut())
    }

    return (
      <button className={s.logout_button} onClick={handleClick}>
          <MdLogout/>
      </button>
    )
}

export default HomeButton
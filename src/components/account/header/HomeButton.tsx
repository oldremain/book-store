import React from 'react'
import { IoMdHome } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import s from '../Account.module.scss'

const HomeButton: React.FC = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
      <button className={s.home_button} onClick={handleClick}>
          <IoMdHome />
      </button>
    )
}

export default HomeButton
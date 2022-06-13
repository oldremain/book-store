import React from 'react'

import s from '../Profile.module.scss'

const UserName: React.FC = () => {
    return (
        <div className={s.username}>
           <span>Oleg</span>
        </div>
    )
}

export default UserName
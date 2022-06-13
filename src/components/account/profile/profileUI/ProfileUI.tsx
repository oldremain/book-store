import React from 'react'

import Avatar from './Avatar'
import UserName from './UserName'

import s from '../Profile.module.scss'

const ProfileUI: React.FC = () => {
    return (
        <div className={s.profile_ui}>
            <Avatar/>
            <UserName/>
        </div>
    )
}

export default ProfileUI
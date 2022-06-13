import React from 'react'

import s from '../Profile.module.scss'

interface IProfileTitle {
    text: string
}

const ProfileTitle: React.FC<IProfileTitle> = ({ text }) => {
    return (
        <div className={s.profile_title}>
            <span>{text}</span>
        </div>
    )
}

export default ProfileTitle
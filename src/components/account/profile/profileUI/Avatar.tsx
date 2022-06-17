import React from 'react'
import profile from '../../../../assets/profile.jpg'
import UploadFile from './UploadFile'

import s from '../Profile.module.scss'

const Avatar: React.FC = () => {

    return (
        <div 
            className={s.avatar_container} 
            onMouseEnter={() => console.log('over')} 
            onMouseLeave={() => console.log('leave')}
        >
            <div className={s.avatar}>
                <img src={profile} alt="avatar" />
            </div>
            <UploadFile/>
        </div>
    )
}

export default Avatar
import React from 'react'
import profile from '../../../../assets/profile.jpg'

import s from '../Profile.module.scss'

const Avatar: React.FC = () => {
    return (
      <div className={s.avatar}>
          <img src={profile} alt="avatar" />
      </div>
    )
}

export default Avatar
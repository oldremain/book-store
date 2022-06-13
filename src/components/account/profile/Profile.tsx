import React from 'react'

import ProfileUI from './profileUI/ProfileUI'
import ProfileForm from './profileForm/ProfileForm'

import s from './Profile.module.scss'
import ProfileControls from './profileControls/ProfileControls'

const Profile: React.FC = () => {
    return (
        <>
            <div className={s.profile_container}>
                <ProfileUI/>
                <ProfileForm/>
            </div>
            <ProfileControls/>
        </>
    )
}

export default Profile
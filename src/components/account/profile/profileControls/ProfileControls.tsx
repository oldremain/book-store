import React from 'react'
import UIPrimaryButton from '../../../UI/button/UiPrimaryButton'

import s from '../Profile.module.scss'

const ProfileControls: React.FC = () => {
    return (
        <div className={s.profile_controls}>
            <UIPrimaryButton text='Save Changes' cNameBtn='ui_btn__save'/>
            <UIPrimaryButton text='Cancel' cNameBtn='ui_btn__cancel'/>
        </div>
    )
}

export default ProfileControls
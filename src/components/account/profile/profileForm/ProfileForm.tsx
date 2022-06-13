import React, { useState } from 'react'
import FormInput from '../../formInput/FormInput'
import InputTooltip from '../../formInput/InputTooltip'
import { IProfileFormState, IProfileValidation } from './types'

import s from '../Profile.module.scss'
import ProfileTitle from '../profileTitle/ProfileTitle'

const ProfileForm: React.FC = () => {
    const [value, setValue] = useState<IProfileFormState>({
        email: '', 
        password: '',
    })

    const [validation, setValidation] = useState<IProfileValidation>({
        isValidUsername: true,
        isValidEmail: true,
        isValidPassword: true
    })

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {}

    return (
        <form className={s.profile_form} onSubmit={handleSubmit}>
                <div className={s.profile}>
                    <ProfileTitle text='Profile'/>
                    <FormInput 
                        title='Name' 
                        id='id_name' 
                        type='text'
                        name='username'
                        valid={validation.isValidUsername} 
                        placeholder='Your name'
                        value={value}
                        onChange={handleChangeValue}
                    >
                        <InputTooltip text={'Only [A-Za-z0-9], 4-40 symbols'}/>
                    </FormInput>
                    <FormInput 
                        title='Email' 
                        id='id_email' 
                        type='email' 
                        name='email'
                        valid={validation.isValidEmail}
                        placeholder='Your email'
                        value={value}
                        onChange={handleChangeValue}
                    >
                        <InputTooltip text={'Example: google@gmail.com'}/>
                    </FormInput>
                </div>
                <div className={s.password}>
                    <ProfileTitle text='Password'/>
                    <FormInput 
                        title='Password' 
                        id='id_password' 
                        type='password' 
                        name='password'
                        valid={validation.isValidPassword}
                        placeholder='Your password'
                        value={value}
                        onChange={handleChangeValue}
                    >   
                        <InputTooltip text={'More than 6 any characters'}/>
                    </FormInput>
                    <FormInput 
                        title='New password' 
                        id='new_password' 
                        type='password' 
                        name='newPassword'
                        valid={validation.isValidPassword}
                        placeholder='New password'
                        value={value}
                        onChange={handleChangeValue}
                    >   
                        <InputTooltip text={'More than 6 any characters'}/>
                    </FormInput>
                    <FormInput 
                        title='Confirm password' 
                        id='id_confirm_password' 
                        type='password' 
                        name='confirmPassword'
                        valid={validation.isValidPassword} 
                        placeholder='Confirm new password'
                        value={value}
                        onChange={handleChangeValue}
                    >   
                        <InputTooltip text={'Confirm password'}/>
                    </FormInput>
                </div>
        </form>
    )
}

export default ProfileForm
import React, { useEffect, useState } from 'react'
import { loginUser, setUser } from '../../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import UIPrimaryButton from '../../UI/button/UiPrimaryButton'
import FormInput from '../formInput/FormInput'

import s from './SignIn.module.scss'

export interface ISignInState {
    email: string,
    password: string,
}

const SignIn: React.FC = () => {
    const [value, setValue] = useState<ISignInState>({
        email: '', 
        password: '',
    })

    const dispatch = useAppDispatch()

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
         e.preventDefault();

        //  const email = value.email.trim()
        //  const password = value.password.trim()

        dispatch(loginUser({
            email: value.email, 
            password: value.password
        }))

        setValue({
            email: '',
            password: ''
        })
    }

    return (
      <>
          <form className={s.form} onSubmit={handleSubmit}>
                <FormInput 
                    title='Email' 
                    id='id_email' 
                    type='email' 
                    name='email'
                    placeholder='Your email'
                    value={value}
                    onChange={handleChangeValue}
                />
                <FormInput 
                    title='Password' 
                    id='id_password' 
                    type='password' 
                    name='password'
                    placeholder='Your password'
                    value={value}
                    onChange={handleChangeValue}
                />
                <UIPrimaryButton 
                    text="Sign In" 
                    cNameBtn="ui_btn_signIn" 
                    type='submit'
                    onClick={handleSubmit}
                />
          </form>
      </>
    )
}

export default SignIn
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks';
import UIPrimaryButton from '../../UI/button/UiPrimaryButton';
import FormInput from '../formInput/FormInput';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser, setUser } from '../../../features/auth/authSlice';

import s from './SignUp.module.scss'

export interface ISignUpState {
    email: string,
    password: string,
    confirmPassword: string,
    username: string
}

const SignUp = () => {
    const [value, setValue] = useState<ISignUpState>({
        email: '', 
        password: '',
        confirmPassword: '',
        username: ''
    })

    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        // const email = value.email.trim();
        // const password = value.password.trim();
        // const confirmPassword = value.confirmPassword.trim()
        // const userName = value.username.trim()

        dispatch(registerUser({
            email: value.email, 
            password: value.password,
        }))

        setValue({
            email: '',
            password: '',
            confirmPassword: '',
            username: ''
        })
    }

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    // useEffect(() => {
    //     console.log(value)
    // }, [value])

    return (
      <>
          <form className={s.form} onSubmit={handleSubmit}>
                <FormInput 
                    title='Name' 
                    id='id_name' 
                    type='text'
                    name='username' 
                    placeholder='Your name'
                    value={value}
                    onChange={handleChangeValue}
                />
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
                <FormInput 
                    title='Confirm password' 
                    id='id_confirm_password' 
                    type='password' 
                    name='confirmPassword'
                    placeholder='Confirm your password'
                    value={value}
                    onChange={handleChangeValue}
                />
                <UIPrimaryButton 
                    text="Sign Up" 
                    cNameBtn="ui_btn_signUp" 
                    type='submit'
                />
          </form>
      </>
    )
}

export default SignUp
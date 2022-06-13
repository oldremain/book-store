import React, { useEffect, useState } from 'react'
import { clearError, loginUser, setUser } from '../../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import UIPrimaryButton from '../../UI/button/UiPrimaryButton'
import FormInput from '../formInput/FormInput'
import InputToolTip from '../formInput/InputTooltip'
// import { BallTriangle } from  'react-loader-spinner'
import Loader from '../../loader/Loader'

import s from './SignIn.module.scss'
import { validateEmail, validatePassword, validateUsername } from '../../../helpers/validation';
import SignInError from './SignInError';

interface IValidation {
    isValidEmail: boolean,
    isValidPassword: boolean
}

export interface ISignInState {
    email: string,
    password: string,
}

const SignIn: React.FC = () => {
    const [value, setValue] = useState<ISignInState>({
        email: '', 
        password: '',
    })
    const [validation, setValidation] = useState<IValidation>({
        isValidEmail: true,
        isValidPassword: true
    })

    const dispatch = useAppDispatch()
    const {isLoading, error, isLogged }= useAppSelector(state => state.auth)

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const isValidEmail = validateEmail(value.email)
        const isValidPassword = validatePassword(value.password)
        const isValidValues = isValidEmail && isValidPassword

        if (isValidValues) {
            dispatch(loginUser({
                email: value.email, 
                password: value.password
            }))
    
            setValue({
                email: '',
                password: ''
            })
            setValidation({
                isValidEmail: true,
                isValidPassword: true
            })
        } else {
            setValidation({
                isValidEmail,
                isValidPassword,
            })
        }
    }

    useEffect(() => {
        if (error.isError) {
            dispatch(clearError())
        }
    }, [])

    return (
      <>
          <form className={s.form} onSubmit={handleSubmit}>
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
                    <InputToolTip text={'Example: google@gmail.com'}/>
                </FormInput>
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
                    <InputToolTip text={'More than 6 any characters'}/>
                </FormInput>
                <UIPrimaryButton 
                    text="Sign In" 
                    cNameBtn="ui_btn_signIn" 
                    type='submit'
                    onClick={handleSubmit}
                />
                {isLoading && <Loader />}
          </form>
          {error.isError && <SignInError />}
      </>
    )
}

export default SignIn
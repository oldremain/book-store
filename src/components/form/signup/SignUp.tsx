import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks';
import UIPrimaryButton from '../../UI/button/UiPrimaryButton';
import FormInput from '../formInput/FormInput';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser, setUser } from '../../../features/auth/authSlice';

import s from './SignUp.module.scss'
import { validateEmail, validatePassword, validateUsername } from '../../../helpers/validation';
import InputTooltip from '../formInput/InputTooltip';

export interface ISignUpState {
    email: string,
    password: string,
    confirmPassword: string,
    username: string
}

interface IValidation {
    isValidUsername: boolean,
    isValidEmail: boolean,
    isValidPassword: boolean
}

const SignUp = () => {
    const [value, setValue] = useState<ISignUpState>({
        email: '', 
        password: '',
        confirmPassword: '',
        username: ''
    })
    const [validation, setValidation] = useState<IValidation>({
        isValidUsername: true,
        isValidEmail: true,
        isValidPassword: true
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
        const isValidUsername = validateUsername(value.username)
        const isValidEmail = validateEmail(value.email)
        const isValidPassword = validatePassword(value.password) && value.password === value.confirmPassword 
        const isValidValues = isValidEmail && isValidPassword && isValidUsername

        if (isValidValues) {
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
            setValidation({
                isValidUsername: true,
                isValidEmail: true,
                isValidPassword: true
            })
        } else {
            setValidation({
                isValidUsername,
                isValidEmail,
                isValidPassword,
            })
        }
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
                    <InputTooltip text={'More than 4 any characters'}/>
                </FormInput>
                <FormInput 
                    title='Confirm password' 
                    id='id_confirm_password' 
                    type='password' 
                    name='confirmPassword'
                    valid={validation.isValidPassword} 
                    placeholder='Confirm your password'
                    value={value}
                    onChange={handleChangeValue}
                >
                    {/* <InputTooltip text={'Example: google@gmail.com'}/> */}
                </FormInput>
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
import React from 'react'
import UIPrimaryButton from '../../UI/button/UiPrimaryButton';
import FormInput from '../formInput/FormInput';

import s from './SignUp.module.scss'

const SignUp = () => {
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
    }

    return (
      <>
          <form className={s.form} onSubmit={handleSubmit}>
                <FormInput 
                    label='Name' 
                    id='id_name' 
                    type='text' 
                    placeholder='Your name'
                />
                <FormInput 
                    label='Email' 
                    id='id_email' 
                    type='email' 
                    placeholder='Your email'
                />
                <FormInput 
                    label='Password' 
                    id='id_password' 
                    type='password' 
                    placeholder='Your password'
                />
                <FormInput 
                    label='Confirm password' 
                    id='id_confirm_password' 
                    type='password' 
                    placeholder='Confirm your password'
                />
                <UIPrimaryButton 
                    text="Sign Up" 
                    cNameBtn="ui_btn_signUp" 
                    type='button'
                />
          </form>
      </>
    )
}

export default SignUp
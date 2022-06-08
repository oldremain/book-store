import React from 'react'
import UIPrimaryButton from '../../UI/button/UiPrimaryButton'
import FormInput from '../formInput/FormInput'

import s from './SignIn.module.scss'

const SignIn: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
    }

    return (
      <>
          <form className={s.form} onSubmit={handleSubmit}>
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
                <UIPrimaryButton 
                    text="Sign In" 
                    cNameBtn="ui_btn_signIn" 
                    type='button'
                />
          </form>
      </>
    )
}

export default SignIn
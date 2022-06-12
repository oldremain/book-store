import React, { useEffect, useState } from 'react'
import { ISignInState } from '../signin/SignIn'
import { ISignUpState } from '../signup/SignUp'
import cn from 'classnames'

import s from './FormInput.module.scss'

interface IFormInput {
    id: string,
    title: string,
    type: string,
    name: string,
    placeholder: string,
    value: ISignInState | ISignUpState,
    valid?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    children?: React.ReactNode
}

const FormInput: React.FC<IFormInput> = ({ title, type, id, name, placeholder, value, valid, onChange, children }) => {
    //const [value, setValue] = useState('')

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value)
    // }

    // useEffect(() => {
    //     console.log(valid)
    // }, [valid])

    return (
        <div className={s.field_container}>
            <label htmlFor={id} className={s.field_label}>
               { title }
            </label>
            <input
                id={id}
                type={type} 
                value={value[name as keyof ISignInState ]}
                name={name} 
                placeholder={placeholder}
                autoComplete="off"
                onChange={onChange}
                className={cn(s.field_input, {[s['field_input--invalid']]: !valid})}
            />
            {children}
        </div>
    )
}

export default FormInput
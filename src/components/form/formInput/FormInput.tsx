import React, { useState } from 'react'
import { ISignInState } from '../signin/SignIn'
import { ISignUpState } from '../signup/SignUp'

import s from './FormInput.module.scss'

interface IFormInput {
    id: string,
    title: string,
    type: string,
    name: string,
    placeholder: string,
    value: ISignInState | ISignUpState,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput: React.FC<IFormInput> = ({ title, type, id, name, placeholder, value, onChange }) => {
    //const [value, setValue] = useState('')

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value)
    // }

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
                className={s.field_input}
            />
        </div>
    )
}

export default FormInput
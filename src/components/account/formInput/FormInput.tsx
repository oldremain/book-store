import React from 'react'
import { ISignInState } from '../signin/types'
import { ISignUpState } from '../signup/types'
import cn from 'classnames'

import BiEdit from 'react-icons/bi';

import s from './FormInput.module.scss'

interface IFormInput {
    id: string,
    title: string,
    type: string,
    name: string,
    placeholder: string,
    value: ISignInState | ISignUpState,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    valid?: boolean,
    disabled?: boolean,
    children?: React.ReactNode,
}

const FormInput: React.FC<IFormInput> = ({ 
    title, 
    type, 
    id,
    name, 
    placeholder, 
    value, 
    valid, 
    onChange, 
    children, 
    disabled = false,
}) => {

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
                disabled={disabled}
            />
            { children }
        </div>
    )
}

export default FormInput
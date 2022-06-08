import React, { useState } from 'react'

import s from './FormInput.module.scss'

interface IFormInput {
    id: string,
    label: string,
    type: string,
    placeholder: string
}

const FormInput: React.FC<IFormInput> = ({ label, type, id, placeholder }) => {
    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className={s.field_container}>
            <label htmlFor={id} className={s.field_label}>
               {label}
            </label>
            <input
                id={id}
                type={type} 
                value={value} 
                placeholder={placeholder}
                autoComplete="off"
                onChange={handleChange}
                className={s.field_input}
            />
        </div>
    )
}

export default FormInput
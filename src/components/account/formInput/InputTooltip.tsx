import React from 'react'

import s from './FormInput.module.scss'

interface IInputTooltip {
    text: string;
}

const InputTooltip: React.FC<IInputTooltip> = ({ text }) => {
  return (
        <span className={s.input_tooltip}>{text}</span>
  )
}

export default InputTooltip
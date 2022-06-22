import React from 'react'

import { BiEdit } from 'react-icons/bi';

import s from '../Profile.module.scss'

const EditControl: React.FC = () => {
    return (
        <button className={s.edit_control}>
            <BiEdit className={s.edit_control_icon}/>
        </button>
    )
}

export default EditControl
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';

import s from '../Profile.module.scss'

const UploadFile: React.FC = () => {
    return (
        <div className={s.upload_container}>
            <label htmlFor="uploadImage" className={s.upload_label}>
                <span>Upload image</span>
            </label>
            <input type="file" id='uploadImage' className={s.upload_input}/>
            <AiOutlineCloudUpload className={s.upload_icon}/>
        </div>
    )
}

export default UploadFile
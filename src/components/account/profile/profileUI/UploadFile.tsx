import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';

import s from '../Profile.module.scss'

interface IUploadFileProps {
    handleUploadImage: (e: any) => void
}

const UploadFile: React.FC<IUploadFileProps> = ({ handleUploadImage }) => {

    return (
        <div className={s.upload_container}>
            <label htmlFor="uploadImage" className={s.upload_label}>
                <span>Upload image</span>
            </label>
            <input 
                type="file" 
                id='uploadImage' 
                className={s.upload_input}
                onChange={handleUploadImage}
            />
            <AiOutlineCloudUpload className={s.upload_icon}/>
        </div>
    )
}

export default UploadFile
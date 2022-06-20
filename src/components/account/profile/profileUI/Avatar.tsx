import React, { useEffect } from 'react'
import useProfileImage from '../../../../hooks/useProfileImage'

import UploadFile from './UploadFile'
import Loader from '../../../loader/Loader'
import profile from '../../../../assets/profile.jpg'

import s from '../Profile.module.scss'

const Avatar: React.FC = () => {
    const { url, handleUploadImage, isLoading } = useProfileImage()

    useEffect(() => {
        console.log(isLoading)
    }, [isLoading])

    return (
        <>
            {isLoading
                ? 
                    <Loader/>
                :  
                    <div className={s.avatar_container}>
                        <div className={s.avatar}>
                            <img src={url || profile} alt="avatar" />
                        </div>
                        <UploadFile handleUploadImage={handleUploadImage}/>
                    </div>
            }
        </>
    )
}

export default Avatar
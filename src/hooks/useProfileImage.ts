import { useAppSelector } from './reduxHooks';
import { useEffect,  useState  } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from '../firebase';

const useProfileImage = () => {
    const [file, setFile] = useState<any>('')
    const [url, setURL] = useState('')
    const [isLoading, setLoading] = useState(false)

    const userId = useAppSelector(state => state.auth.user.id)

    const handleUploadImage = (e: any) => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        if (file) {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
        
            uploadTask.on('state_changed', (snapshot) => {
            switch (snapshot.state) {
                case 'running':
                    setLoading(true)
                    break;
                }
            }, 
            (error: any) => {
                console.log(error)
                setLoading(false)
            }, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setURL(downloadURL)
                setLoading(false)
              });
            });
        }
    }, [file])

    useEffect(() => {
        if(userId && url) {
            console.log('updating')
            updateDoc(doc(db, "users", userId), {
                image: url
              }).then(console.log)
        } //для обновления базы users(добавление картинки)
    }, [userId, url])

    return {
        url,
        handleUploadImage,
        isLoading
    }
}

export default useProfileImage
import { useEffect,  useState  } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';

const useProfileImage = () => {
    const [file, setFile] = useState<any>('')
    const [url, setURL] = useState('')
    const [isLoading, setLoading] = useState(false)

    const handleUploadImage = (e: any) => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        if (file) {
            setLoading(true)

            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
        
            uploadTask.on('state_changed', (snapshot) => {
            switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
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

    return {
        url,
        handleUploadImage,
        isLoading
    }
}

export default useProfileImage
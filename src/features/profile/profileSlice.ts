import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

//const storageRef = ref(storage, 'images/rivers.jpg');

interface IInitialState {
    img: string
}

const initialState: IInitialState = {
    img: ''
}

const uploadImage = createAsyncThunk(
    'profile/uploadImage', async (file: any, { rejectWithValue }) => {
            const storageRef = ref(storage, file.name);
            const uploadTask: any = await uploadBytesResumable(storageRef, file);
            
            uploadTask.on('state_changed', (snapshot: any) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
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
            }, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
              });
            });
    }
)


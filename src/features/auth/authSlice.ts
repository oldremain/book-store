import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { serverTimestamp, setDoc, doc } from "firebase/firestore"; 
import { auth, db } from "../../firebase";
import { checkUser, getUserData } from "./authHelpers";
import { IAuthResponse, IInitialState, IQuerryParams } from "./types";

const user = localStorage.getItem('user')

const initialState: IInitialState = {
    user: {
        email: getUserData(user, 'email'),
        accessToken: null,
        refreshToken: null,
        id: getUserData(user, 'uid')
    },
    isLogged: checkUser(localStorage.getItem('user')),
    isLoading: false,
    error: {
        message: undefined,
        isError: false
    }
}

export const registerUser = createAsyncThunk<IAuthResponse, IQuerryParams, { rejectValue: string }>(
    "user/registerUser", async ({email: userEmail, password, username}, { rejectWithValue }) => {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, userEmail, password)
            const {email, uid, stsTokenManager}= user.toJSON() as IAuthResponse

            const docRef = await setDoc(doc(db, "users", uid), {
                username,
                email,
                password,
                uid,
                stsTokenManager,
                timeStamp: serverTimestamp()
              });
            return {email, stsTokenManager, uid} 
        } catch (e: any) {
           return rejectWithValue(e.message)
        }
    }
)

export const loginUser = createAsyncThunk<IAuthResponse, IQuerryParams, { rejectValue: string }>(
    "user/loginUser", async ({email: userEmail, password}, { rejectWithValue }) => {
        try {
            const {user} = await signInWithEmailAndPassword(auth, userEmail, password)
            const {email, uid, stsTokenManager}= user.toJSON() as IAuthResponse

            return {email, uid, stsTokenManager}
        } catch (e: any) {
           return rejectWithValue(e.message)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, { payload }) {
            // state.user.email = payload.email;
            // //state.user.token = payload.token;
            // state.user.id = payload.id;
        },
        removeUser(state) {
            // state.user.email = null;
            // //state.user.token = null;
            // state.user.id = null;
        },
        clearError(state) {
            state.error =  {
                message: undefined,
                isError: false
            }
        },
        logOut(state) {
            state.user = {
                email: null,
                accessToken: null,
                refreshToken: null,
                id: null
            }
            state.isLogged = false
            localStorage.removeItem('user')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.error = {
                    message: undefined,
                    isError: false
                };
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, {payload}: PayloadAction<IAuthResponse>) => {
                state.user.email = payload.email;
                state.user.accessToken = payload.stsTokenManager.accessToken;
                state.user.refreshToken = payload.stsTokenManager.refreshToken;
                state.user.id = payload.uid;
                state.isLogged = true
                state.isLoading = false

                localStorage.setItem('user', JSON.stringify(payload))
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = {
                    message: action.payload,
                    isError: true
                };
                state.isLoading = false
            })

            .addCase(loginUser.pending, (state, action) => {
                state.error =  {
                    message: undefined,
                    isError: false
                };
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, {payload}: PayloadAction<IAuthResponse>) => {
                state.user.email = payload.email;
                state.user.accessToken = payload.stsTokenManager.accessToken;
                state.user.refreshToken = payload.stsTokenManager.refreshToken;
                state.user.id = payload.uid;
                state.isLogged = true
                state.isLoading = false

                localStorage.setItem('user', JSON.stringify(payload))
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error =  {
                    message: action.error.message,
                    isError: true
                };
                state.isLoading = false
            })
    }
})

export const { setUser,  removeUser, clearError, logOut} = authSlice.actions

export default authSlice.reducer
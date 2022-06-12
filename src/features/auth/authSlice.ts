import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//const userAuth = localStorage.getItem('userLogged') || false

interface IAuthUser {
    email: string | null,
    accessToken: string | null,
    refreshToken: string | null,
    id: string | null,
}

interface IInitialState {
    user: IAuthUser,
    isLogged: boolean,
    isLoading: boolean,
    error: IAuthError
}

const initialState: IInitialState = {
    user: {
        email: null,
        accessToken: null,
        refreshToken: null,
        id: null
    },
    isLogged: JSON.parse(localStorage.getItem('userLogged') || 'false') ,
    isLoading: false,
    error: {
        message: undefined,
        isError: false
    }
}

interface IAuthResponse {
    email: string, 
    uid: string, 
    stsTokenManager: {
        accessToken: string,
        expirationTime: number,
        refreshToken: string
    }
}

interface IAuthError {
    message: string | undefined,
    isError: boolean
}

interface IQuerryParams {
    email: string;
    password: string;
}

export const registerUser = createAsyncThunk<IAuthResponse, IQuerryParams, { rejectValue: string }>(
    "user/registerUser", async ({email: userEmail, password}, { rejectWithValue }) => {
        try {
            const auth = getAuth();
            const {user} = await createUserWithEmailAndPassword(auth, userEmail, password)
            const {email, uid, stsTokenManager}= user.toJSON() as IAuthResponse

            return {email, stsTokenManager, uid} 
        } catch (e: any) {
           return rejectWithValue(e.message)
        }
    }
)

export const loginUser = createAsyncThunk<IAuthResponse, IQuerryParams, { rejectValue: string }>(
    "user/loginUser", async ({email: userEmail, password}, { rejectWithValue }) => {
        try {
            const auth = getAuth();
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
                state.isLoading = false

                localStorage.setItem('userLogged', JSON.stringify(true))
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
                };;
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, {payload}: PayloadAction<IAuthResponse>) => {
                state.user.email = payload.email;
                state.user.accessToken = payload.stsTokenManager.accessToken;
                state.user.refreshToken = payload.stsTokenManager.refreshToken;
                state.user.id = payload.uid;
                state.isLogged = true
                state.isLoading = false

                localStorage.setItem('userLogged', JSON.stringify(true))
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

export const { setUser,  removeUser} = authSlice.actions

export default authSlice.reducer
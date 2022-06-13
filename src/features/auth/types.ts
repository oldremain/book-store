export interface IInitialState {
    user: IAuthUser,
    isLogged: boolean,
    isLoading: boolean,
    error: IAuthError
}
interface IAuthUser {
    email: string | null,
    accessToken: string | null,
    refreshToken: string | null,
    id: string | null,
}
interface IAuthError {
    message: string | undefined,
    isError: boolean
}

export interface IAuthResponse {
    email: string, 
    uid: string, 
    stsTokenManager: {
        accessToken: string,
        expirationTime: number,
        refreshToken: string
    }
}
export interface IQuerryParams {
    email: string;
    password: string;
}
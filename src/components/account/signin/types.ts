export interface IValidation {
    isValidEmail: boolean,
    isValidPassword: boolean
}

export interface ISignInState {
    email: string,
    password: string,
}
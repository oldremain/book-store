export interface ISignUpState {
    email: string,
    password: string,
    confirmPassword: string,
    username: string
}

export interface IValidation {
    isValidUsername: boolean,
    isValidEmail: boolean,
    isValidPassword: boolean
}
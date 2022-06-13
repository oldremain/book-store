export interface IProfileFormState {
    email: string,
    password: string,
}

export interface IProfileValidation {
    isValidUsername: boolean,
    isValidEmail: boolean,
    isValidPassword: boolean
}
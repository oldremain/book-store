export const validateUsername = (value: string): boolean => {
    return !!value.match(/^[A-Za-z0-9]{4,40}$/) ? true : false
}

export const validateEmail = (value: string): boolean => {
    return !!value.match(/^\w+@[a-z]+\.[a-z]+$/) ? true : false
}

export const validatePassword = (value: string): boolean => {
    return value.length >= 6 ? true : false
}
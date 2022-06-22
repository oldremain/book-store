export const checkUser = (user: string | null): boolean => {
    if (user) {
        try {
            return JSON.parse(user).uid ? true : false
        } catch(e: any) {
            console.log(e.message)
        } 
    }
    return false
}

export const getUserData = (user: string | null, value: string): string | null => {
    if (user) {
        try {
            return JSON.parse(user)[value]
        } catch(e: any) {
            console.log(e.message)
        } 
    }
    return null
}
import { useAppSelector } from './reduxHooks';

export const useAuth = () => {
    const { email, id, accessToken, refreshToken } = useAppSelector(state => state.user.user)

    return {
        isAuth: !!email,
        email,
        id,
        accessToken,
        refreshToken
    }
}
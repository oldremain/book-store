import { useAppSelector } from './reduxHooks';

export const useAuth = () => {
    const { email, id, token } = useAppSelector(state => state.user.user)

    return {
        isAuth: !!email,
        email,
        id,
        token
    }
}
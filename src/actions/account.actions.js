import {apiPost,apiPostRefreshToken} from '../helpers/api'

export const signUp = async (data) => {
    const payload = await apiPost('/auth/sign-up',data)
    return {type: SIGN_UP, payload: payload}
}

export const signIn = async (data) => {
    const payload = await apiPost('/auth/sign-in',data)
    return {type: SIGN_IN, payload: payload}
}

export const signOut = () => {
    return {type: SIGN_OUT, payload: {}}
}

export const initAccount = () =>{
    return {type: INIT_ACC, payload: null}
}

export const refreshToken = async () =>{
    const payload = await apiPostRefreshToken()
    return {type: REFRESH_TOKEN, payload: payload}
}

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const INIT_ACC = 'INIT_ACC'
export const REFRESH_TOKEN = 'REFRESH_TOKEN'
import {apiPost} from '../../helpers/api'

export const signUp = async (data) => {
    const payload = await apiPost('/auth/sign-up',data)
    console.log(payload)
    return {type: SIGN_UP, payload}
}

export const SIGN_UP = 'SIGN_UP'
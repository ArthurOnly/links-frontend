import {apiGet} from '../../helpers/api'

export const SIGN_IN = 'SIGN_IN'

export const signIn = (data) => {
    const payload = apiGet('/auth/sign-in',data)
    return {type: SIGN_IN, payload: payload}
}
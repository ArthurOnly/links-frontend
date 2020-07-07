import {apiPost} from '../helpers/api'

export const CREATE_LINK = 'CREATE_LINK'

export const linkCreate = data => {
    data.isSocial = !!data.isSocial
    const payload = apiPost('/link',data)
    return {type: CREATE_LINK, payload: payload}
}
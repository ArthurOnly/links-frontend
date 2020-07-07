import {apiPost, apiGet} from '../helpers/api'

export const CREATE_LINK = 'CREATE_LINK'
export const LIST_LINK = 'LIST_LINK'

export const linkCreate = data => {
    data.isSocial = !!data.isSocial
    const payload = apiPost('/link',data)
    return {type: CREATE_LINK, payload: payload}
}

export const linkList = async() => {
    const payload = await apiGet('/link')
    return {type: LIST_LINK, payload: payload}
}
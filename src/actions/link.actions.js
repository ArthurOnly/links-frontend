import {apiPost, apiGet, apiPut} from '../helpers/api'

export const CREATE_LINK = 'CREATE_LINK'
export const LIST_LINK = 'LIST_LINK'
export const GET_LINK = 'GET_LINK'
export const UPDATE_LINK = 'UPDATE_LINK'

export const linkCreate = data => {
    data.isSocial = !!data.isSocial
    const payload = apiPost('/link',data)
    return {type: CREATE_LINK, payload: payload}
}

export const linkList = async() => {
    const payload = await apiGet('/link')
    return {type: LIST_LINK, payload: payload}
}

export const linkGet = async(id) => {
    const payload = await apiGet(`/link/${id}`)
    return {type: GET_LINK, payload: payload}
}

export const linkUpdate = async(id,data) => {
    data.isSocial = !!data.isSocial
    const payload = await apiPut(`/link/${id}`,data)
    return {type: UPDATE_LINK, payload: payload}
}
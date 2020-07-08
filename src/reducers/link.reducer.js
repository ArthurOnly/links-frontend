import {CREATE_LINK, LIST_LINK,GET_LINK, UPDATE_LINK} from '../actions/link.actions'

const initialState = {
    link: null,
    links: []
}

export default function(state=initialState,action){
    const {type,payload} = action
    switch(type){
        case CREATE_LINK: {
            const response = payload.data
            const link = response ? response.data : null

            return {...state, link}
        }
        case LIST_LINK: {
            const response = payload.data
            const links = response ? response.data : null

            return {...state, links}
        }
        case GET_LINK: {
            const response = payload.data
            const link = response ? response.data : null

            return {...state, link}
        }
        case UPDATE_LINK: {
            const response = payload.data
            const link = response ? response.data : null

            return {...state, link}
        }
        default:
            return state           
    }
}
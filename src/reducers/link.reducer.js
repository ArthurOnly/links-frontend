import {CREATE_LINK} from '../actions/link.actions'

const initialState = {
    link: null
}

export default function(state=initialState,action){
    const {type,payload} = action
    switch(type){
        case CREATE_LINK:
            const response = payload.data
            const link = response ? response.data : null

            return {...state, link}
        default:
            return state           
    }
}
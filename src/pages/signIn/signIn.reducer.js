import {SIGN_IN} from './signIn.actions'

const initialState = {
    account: null
}

export default function(state = initialState,action){
    const {type,payload} = action
    switch(type){
        case SIGN_IN:
            return { ...initialState,account: payload}
        default:
            return state
    }
}
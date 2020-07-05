import {SIGN_UP} from './signUp.actions'

const initialState = {
    account: null
}

export default function(state = initialState,action){
    const {type,payload} = action
    switch(type){
        case SIGN_UP:
            return { ...initialState,account: payload}
        default:
            return state
    }
}
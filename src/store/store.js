import {createStore,applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'

import signInReducer from '../pages/signIn/signIn.reducer'
import signUpReducer from '../pages/signUp/signUp.reducer'

const reducers = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer
})

const store = createStore(reducers,applyMiddleware(ReduxPromise))

export default store;
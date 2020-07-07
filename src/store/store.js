import {createStore,applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'

import accountReducer from '../reducers/account.reducer'
import linkReducer from '../reducers/link.reducer'

const reducers = combineReducers({
    account: accountReducer,
    link: linkReducer
})

const store = createStore(reducers,applyMiddleware(ReduxPromise))

export default store;
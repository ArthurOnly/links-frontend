import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import SignIn from './pages/signIn/signIn'
import SignUp from './pages/signUp/signUp'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/sign-in'><SignIn/></Route>
                <Route path='/sign-up'><SignUp/></Route>
                
                <Route exact path='/links'><SignIn/></Route>
                <Route path='/links/create'><SignIn/></Route>
                <Route path='/links/edit'><SignIn/></Route>
            </Switch>
        </BrowserRouter>
    )
}
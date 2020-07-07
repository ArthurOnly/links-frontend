import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import SignIn from './pages/signIn/signIn'
import SignUp from './pages/signUp/signUp'

import CreateLink from './pages/createLink/createLink'
import EditLink from './pages/editLink/editLink'
import Links from './pages/linksHome/links'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/sign-in'><SignIn/></Route>
                <Route path='/sign-up'><SignUp/></Route>

                <Route exact path='/'><Redirect to='/sign-in'/></Route>                
                <Route exact path='/links'><Links/></Route>
                <Route path='/links/create'><CreateLink/></Route>
                <Route path='/links/edit'><EditLink/></Route>
            </Switch>
        </BrowserRouter>
    )
}
import React,{useEffect} from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import SignIn from './pages/signIn/signIn'
import SignUp from './pages/signUp/signUp'

import CreateLink from './pages/createLink/createLink'
import EditLink from './pages/editLink/editLink'
import Links from './pages/linksHome/links'


import {connect} from 'react-redux'
import {initAccount} from './actions/account.actions'

function Routes({initAccount,account}){
    useEffect(()=>initAccount(),[initAccount])
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/sign-in'><SignIn/></Route>
                <Route path='/sign-up'><SignUp/></Route>

                <Route exact path='/'><Redirect to='/sign-in'/></Route>                
                <Route exact path='/links'><Links/></Route>
                <Route path='/links/create'><CreateLink/></Route>
                <Route path='/links/edit/:id'><EditLink/></Route>
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = state =>{
    return {account: state.account.account}
}


export default connect(mapStateToProps, {initAccount})(Routes)
import React from 'react'
import { useHistory } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

import {Typography, Link as MuiLink} from '@material-ui/core'
import {Navbar as Nav} from '../../global.styles'

import {connect} from 'react-redux'
import {signOut} from '../../actions/account.actions'

function Navbar(props){
    const {signOut, account} = props
    const history = useHistory()

    if (!account) return <Redirect to='/sign-in'/>

    return(
        <Nav>
            <Typography variant='h4' style={{cursor: 'pointer'}} onClick={()=>history.goBack()}>Back</Typography>
            <Typography variant='h4' style={{cursor: 'pointer'}} onClick={()=>history.push('/links')}>Links</Typography>

            <Typography variant='h4'>
                <MuiLink style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={()=>{
                    signOut()   
                }}>Exit</MuiLink>
            </Typography>

        </Nav>
    )
}

const mapStateToProps = state => {
    return {account: state.account.account}
}


export default connect(mapStateToProps, {signOut})(Navbar)
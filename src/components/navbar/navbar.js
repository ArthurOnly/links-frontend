import React from 'react'
import {Redirect} from 'react-router-dom'

import {Link} from 'react-router-dom'
import {Typography, Link as MuiLink} from '@material-ui/core'
import {Navbar as Nav} from '../../global.styles'

import {connect} from 'react-redux'
import {signOut} from '../../actions/account.actions'

function Navbar(props){
    const {signOut, account} = props

    if (!account) return <Redirect to='/sign-in'/>

    return(
        <Nav>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><Typography variant='h4'>Back</Typography></Link>
            <Link to="/links" style={{ color: 'inherit', textDecoration: 'inherit'}}><Typography variant='h4'>Links</Typography></Link>

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
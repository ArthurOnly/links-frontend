import React from 'react'

import {TextField, Button, Typography} from '@material-ui/core'
import {Container,LoginContainer} from './signIn.styles'

import { useForm } from "react-hook-form"
import {connect} from 'react-redux'

import {signIn} from './signIn.actions'

function SignIn(props) {
    const {account,signIn} = props

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
        signIn(data)
    }

    return (
        <Container>
        <LoginContainer>
            <Typography variant='h1' style={{marginBottom: '20px'}}>Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                <TextField fullWidth name='email' inputRef={register({required:true})} label='Email' placeholder='meuemail@gmail.com' variant='outlined' style={{marginBottom: '10px'}}
                    error={!!errors.email}
                />
                <TextField fullWidth name='password' inputRef={register({required:true})} label='Senha' type='password' variant='outlined' style={{marginBottom: '10px'}} error={!!errors.password}/>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <Button type='submit' variant='contained' size='large' disableElevation color='primary' fullWidth children='Login' style={{marginRight: '2.5px'}}/>
                  <Button variant='outlined' disableElevation color='primary' fullWidth children='Cadastre-se' style={{marginLeft: '2.5px'}}/>
                </div>
            </form>
        </LoginContainer>
        </Container>
    );
}

const mapStateToProps = state => {
    return {account: state.signIn.account}
}

export default connect(mapStateToProps,{signIn})(SignIn)
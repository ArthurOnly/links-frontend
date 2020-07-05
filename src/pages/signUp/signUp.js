import React from 'react'

import {TextField, Button, Typography} from '@material-ui/core'
import {Container,LoginContainer} from './signUp.styles'

import { useForm } from "react-hook-form";

function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container>
        <LoginContainer>
            <Typography variant='h1' style={{marginBottom: '20px'}}>Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                <TextField fullWidth name='email' inputRef={register({required:true})} label='Email' placeholder='meuemail@gmail.com' variant='outlined' style={{marginBottom: '10px'}}
                    error={!!errors.email}
                />
                <TextField fullWidth name='password' inputRef={register({required:true})} label='Senha' type='password' variant='outlined' style={{marginBottom: '10px'}} error={!!errors.password}/>
                <TextField fullWidth name='password_confirmation' inputRef={register({required:true})} label='Confirme sua senha' type='password' variant='outlined' style={{marginBottom: '20px'}} error={!!errors.password_confirmation}/>
                <Button type='submit' variant='contained' size='large' disableElevation color='primary' fullWidth children='Cadastrar' style={{marginRight: '2.5px'}}/>
            </form>
        </LoginContainer>
        </Container>
    );
}

export default SignUp

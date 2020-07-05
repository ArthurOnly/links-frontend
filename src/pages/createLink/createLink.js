import React from 'react'

import {TextField, Button, Typography, Checkbox, FormControlLabel} from '@material-ui/core'
import {Container,LoginContainer} from './createLink.styles'
import {Page} from '../../global.styles'
import { useForm } from "react-hook-form";
import Navbar from '../../components/navbar/navbar'

function CreateLink() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Page>
            <Navbar/>
            <Container>
                <LoginContainer>
                    <Typography variant='h1' style={{marginBottom: '20px'}}>Criar link</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                        <TextField fullWidth name='name' inputRef={register({required:true})} label='name' placeholder='Meu facebook' variant='outlined' style={{marginBottom: '10px'}}
                            error={!!errors.name}
                        />
                        <TextField fullWidth name='url' inputRef={register({required:true})} label='url' type='name' variant='outlined' style={{marginBottom: '10px'}} error={!!errors.url}/>
                        <FormControlLabel
                            value="isSocial"
                            control={<Checkbox name='isSocial' color='primary' inputRef={register}/>}
                            label="isSocial"
                            labelPlacement="end"
                            style={{marginBottom: '20px'}}
                        />
                        <Button type='submit' variant='contained' size='large' disableElevation color='primary' fullWidth children='Cadastrar link'/>
                    </form>
                </LoginContainer>
            </Container>
        </Page>
    );
}

export default CreateLink
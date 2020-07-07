import React from 'react'
import {Redirect} from 'react-router-dom'

import {TextField, Button, Typography, Checkbox, FormControlLabel} from '@material-ui/core'
import {Container,LoginContainer} from './createLink.styles'
import {Page} from '../../global.styles'
import { useForm } from "react-hook-form";
import Navbar from '../../components/navbar/navbar'

import {connect} from 'react-redux'
import {linkCreate} from '../../actions/link.actions'

function CreateLink(props) {
    const {link, linkCreate} = props

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => linkCreate(data);

    if (link) return <Redirect to='/links'/>

    return (
        <Page>
            <Navbar/>
            <Container>
                <LoginContainer>
                    <Typography variant='h1' style={{marginBottom: '20px'}}>Criar link</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                        <TextField fullWidth name='label' inputRef={register({required:true})} label='name' placeholder='Meu facebook' variant='outlined' style={{marginBottom: '10px'}}
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

const mapStateToProps = state => {
    return {link: state.link.link}
}


export default connect(mapStateToProps, {linkCreate})(CreateLink)
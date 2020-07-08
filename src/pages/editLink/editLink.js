import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {TextField, Button, Typography, Checkbox, FormControlLabel} from '@material-ui/core'
import {Container,LoginContainer} from './editLink.styles'
import {Page} from '../../global.styles'
import { useForm } from "react-hook-form"
import Navbar from '../../components/navbar/navbar'

import {connect} from 'react-redux'
import {linkGet} from '../../actions/link.actions'

function EditLink({link, linkGet}) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    const {id} = useParams()
    
    useEffect(()=>{
        linkGet(id)
    },[id,linkGet])

    console.log('***** link', link)

    return (
        <Page>
            <Navbar/>
            <Container>
                <LoginContainer>
                    <Typography variant='h1' style={{marginBottom: '20px'}}>Editar link</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                        <TextField fullWidth name='name' inputRef={register({required:true})} label='name' placeholder='Meu facebook' variant='outlined' style={{marginBottom: '10px'}}
                            error={!!errors.name} defaultValue={link ? link.label : null}
                        />
                        <TextField defaultValue={link ? link.url : null} fullWidth name='url' inputRef={register({required:true})} label='url' type='name' variant='outlined' style={{marginBottom: '10px'}} error={!!errors.url}/>
                        <FormControlLabel
                            value="isSocial"
                            control={<Checkbox checked={link ? link.isSocial ? true : false : false} name='isSocial' color='primary' inputRef={register}/>}
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

export default connect(mapStateToProps, {linkGet})(EditLink)
import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import {TextField, Button, Typography, Checkbox, FormControlLabel} from '@material-ui/core'
import {Container,LoginContainer} from './editLink.styles'
import {Page} from '../../global.styles'
import { useForm } from "react-hook-form"
import Navbar from '../../components/navbar/navbar'

import {connect} from 'react-redux'
import {linkGet,linkUpdate} from '../../actions/link.actions'

function EditLink({link, linkGet, linkUpdate}) {
    const {id} = useParams()

    const { register, handleSubmit, errors, reset } = useForm();

    useEffect(()=>{
        reset(linkGet(id))
    },[id,linkGet,reset])

    useEffect(() => {
        reset({
            label: link ? link.label : " ",
            url: link ? link.url : " ",
            isSocial: link ? link.isSocial : false
        })
    },[reset,link])

    const [init,setInit] = useState(link ? link.isSocial : false)

    
    const onSubmit = data => {
        linkUpdate(id,data)
        console.log(data)
    }

    return (
        <Page>
            <Navbar/>
            <Container>
                <LoginContainer>
                    <Typography variant='h1' style={{marginBottom: '20px'}}>Editar link</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                        <TextField fullWidth name='label' inputRef={register({required:true})} label='name' placeholder='Meu facebook' variant='outlined' style={{marginBottom: '10px'}}
                            error={!!errors.name}
                        />
                        <TextField fullWidth name='url' inputRef={register({required:true})} label='url' type='name' variant='outlined' style={{marginBottom: '10px'}} error={!!errors.url}/>
                        <FormControlLabel
                            control={<Checkbox inputRef={register} checked={init} onChange={()=>setInit(!init)} name='isSocial' color='primary'/>}
                            label="isSocial"
                            labelPlacement="end"
                            style={{marginBottom: '20px'}}
                        />
                        <Button type='submit' variant='contained' size='large' disableElevation color='primary' fullWidth children='Atualizar link'/>
                    </form>
                </LoginContainer>
            </Container>
        </Page>
    );
}

const mapStateToProps = state => {
    return {link: state.link.link}
}

export default connect(mapStateToProps, {linkGet,linkUpdate})(EditLink)
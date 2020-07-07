import React from 'react'
import { useHistory } from 'react-router-dom';

import {Typography, Button} from '@material-ui/core'
import {Container,LinkContainer} from './links.styles'
import {Page} from '../../global.styles'
import Navbar from '../../components/navbar/navbar'

function Links() {
    const history = useHistory()

    function redirect(){
        history.push('/links/create')
    }

    return (
        <Page>
            <Navbar/>
            <Container>
                <Button variant='outlined' disableElevation color='primary' fullWidth children='Novo link' style={{marginBottom: '20px'}} 
                onClick={()=>redirect()}/>
                <LinkContainer>
                    <img></img>
                    <div>
                        <Typography variant='h5'>Label</Typography>
                        <Typography variant='body1'>url</Typography>
                    </div>
                    <div>
                        <Typography variant='h5'>Editar</Typography>
                        <Typography variant='body1'>Deletar</Typography>
                    </div>
                </LinkContainer>
            </Container>
        </Page>
    );
}

export default Links
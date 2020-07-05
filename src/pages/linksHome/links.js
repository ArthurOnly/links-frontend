import React from 'react'

import {Typography, Button} from '@material-ui/core'
import {Container,LinkContainer} from './links.styles'
import {Page} from '../../global.styles'
import Navbar from '../../components/navbar/navbar'

function Links() {
    return (
        <Page>
            <Navbar/>
            <Container>
                <Button variant='outlined' disableElevation color='primary' fullWidth children='Novo link' style={{marginBottom: '20px'}}/>
                <LinkContainer>
                    <img></img>
                    <div>
                        <Typography variant='h5'>Label</Typography>
                        <Typography variant='p'>url</Typography>
                    </div>
                    <div>
                        <Typography variant='h5'>Editar</Typography>
                        <Typography variant='p'>Deletar</Typography>
                    </div>
                </LinkContainer>
            </Container>
        </Page>
    );
}

export default Links
import React from 'react'

import {Typography, Button} from '@material-ui/core'
import {Container,LinkContainer} from './links.styles'
import {Navbar,Page} from '../../global.styles'
import {Link} from 'react-router-dom'

function Links() {
    return (
        <Page>
            <Navbar>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><Typography variant='h4'>Back</Typography></Link>
                <Link to="/links" style={{ color: 'inherit', textDecoration: 'inherit'}}><Typography variant='h4'>Links</Typography></Link>
                <Link to="/sign-in" style={{ color: 'inherit', textDecoration: 'inherit'}}><Typography variant='h4'>Exit</Typography></Link>
            </Navbar>
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
import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux'

import {Typography, Button} from '@material-ui/core'
import {Container,LinkContainer} from './links.styles'
import {Page} from '../../global.styles'
import Navbar from '../../components/navbar/navbar'

import {linkList} from '../../actions/link.actions'

function Links({linkList, links}) {
    
    const history = useHistory()
    function redirect(){
        history.push('/links/create')
    }

    useEffect(()=>{
        async function getLinks(){
            return await linkList() 
        }
        getLinks()
    }, [linkList])

    console.log(links)

    return (
        <Page>
            <Navbar/>
            <Container>
                <Button variant='outlined' disableElevation color='primary' fullWidth children='Novo link' style={{marginBottom: '20px'}} 
                onClick={()=>redirect()}/>
                {links ? links.map(el=>{
                    return (
                        <LinkContainer key={el.id}>
                            <img></img>
                            <div>
                                <Typography variant='h5'>{el.label}</Typography>
                                <Typography variant='body1'>{el.url}</Typography>
                            </div>
                            <div>
                                <Typography variant='h5'>Editar</Typography>
                                <Typography variant='body1'>Deletar</Typography>
                            </div>
                        </LinkContainer>
                    )
                    })
                : null}
            </Container>
        </Page>
    );
}

const mapStateToProps = state => {
    return {links: state.link.links}
}


export default connect(mapStateToProps, {linkList})(Links)
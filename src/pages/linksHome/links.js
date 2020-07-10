import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux'

import {Typography, Button, Dialog, DialogActions, DialogTitle} from '@material-ui/core'
import {Container,LinkContainer} from './links.styles'
import {Page} from '../../global.styles'
import Navbar from '../../components/navbar/navbar'

import {linkList, linkDelete} from '../../actions/link.actions'

function Links({linkList, links, linkDelete}) {
    
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

    const [dialog, setDialog] = useState(false)
    const [activeLink, setActiveLink] = useState(null)

    return (
        <Page>
            <Navbar/>
            <Container>
                <Button variant='outlined' disableElevation color='primary' fullWidth children='Novo link' style={{marginBottom: '20px'}} 
                onClick={()=>redirect()}/>
                {links ? links.map(el=>{
                    return (
                        <LinkContainer key={el.id}>
                            <img alt=''></img>
                            <div>
                                <Typography variant='h5'>{el.label}</Typography>
                                <Typography variant='body1'>{el.url}</Typography>
                            </div>
                            <div>
                                <Typography variant='h5' style={{cursor: 'pointer'}} onClick={()=>history.push(`/links/edit/${el.id}`)}>Editar</Typography>
                                <Typography variant='body1' style={{cursor: 'pointer'}} onClick={()=>{
                                    setActiveLink(el.id)
                                    setDialog(true)   
                                }}>Deletar</Typography>
                            </div>
                        </LinkContainer>
                    )
                    })
                : null}
            </Container>
            <Dialog
                open={dialog}
                onClose={()=>setDialog(false)}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this link?"}</DialogTitle>
                <DialogActions>
                <Button onClick={()=>setDialog(false)} color="primary">
                    No
                </Button>
                <Button onClick={async()=>{
                    await linkDelete(activeLink)
                    linkList()  
                    setDialog(false)
                }} color="primary" autoFocus>
                    Yes
                </Button>
                </DialogActions>
            </Dialog>
        </Page>
    );
}

const mapStateToProps = state => {
    return {
        links: state.link.links,
    }
}


export default connect(mapStateToProps, {linkList,linkDelete})(Links)
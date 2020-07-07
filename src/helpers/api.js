import axios from 'axios'
import {getToken} from './account'

const API_END = 'http://localhost:3001'

const getApiUrl = path =>{
    return API_END + path
}

const getHeaders = headers =>{
    const token = getToken()
    if (!token) return {}
    return {
        authorization: `Bearer ${token}`
    }
}

export const apiPost = (path, data={}) => {
    const url = getApiUrl(path)
    const options = {headers: getHeaders()}
    return axios.post(url,data,options)
}

export const apiGet = (path, data={}) => {
    const url = getApiUrl(path)
    const options = {headers: getHeaders()}
    return axios.post(url,data,options)
}

//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTU5NDE0NjUxNiwiZXhwIjoxNTk0MTQ4MzE2fQ.plb4MLHF4J8_T2XDiq0j7_GisjgxKkfkpDAP10Yc5ww
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTU5NDE0NjM0MCwiZXhwIjoxNTk0MTQ4MTQwfQ.Q3usWN7_j-VbXHhFLNu8czD5vVGKAH6nkXwkpjdKGRM
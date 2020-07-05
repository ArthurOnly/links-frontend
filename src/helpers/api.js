import axios from 'axios'

const API_END = 'http://localhost:3001'

const getApiUrl = path =>{
    return API_END + path
}

const getHeaders = headers =>{
    return {}
}

export const apiPost = (path, data={}) => {
    const url = getApiUrl(path)
    const options = {header: getHeaders()}
    return axios.post(url,data,options)
}
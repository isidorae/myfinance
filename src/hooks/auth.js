import axios from './axios'

export const register = (data) => {
    return axios.post('/user/register', data)
}

export const login = (data) => {
    return axios.post('/user/login', data)
}

export const logout = () => {
    return axios.post('/user/logout')
}
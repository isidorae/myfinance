import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:3002/my-finance-app/v1',
    baseURL: 'https://financeapp-26ny.onrender.com/my-finance-app/v1',
    withCredentials: true
})

export default instance
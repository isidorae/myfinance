import axios from './axios'

//GENERAL REQUESTS
export const addTransactionReq = (body, type, token) => {
    return axios.post(`/transactions/${type}`, body, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}
export const getTransactionsHistory = (id, token) => {
    return axios.get(`/transactions/${id}`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}

export const deleteTransaction = (id, token) => {
    return axios.delete(`/transactions/${id}`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}

//SPECIFIC REQUESTS
export const getUserTransactionData = (transaction, id, token) => {
    return axios.get(`/transactions/${transaction}/${id}`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}

import axios from './axios'

//GENERAL REQUESTS
export const addTransactionReq = (body, type) => {
    return axios.post(`/transactions/${type}`, body)
}
export const getTransactionsHistory = (id) => {
    return axios.get(`/transactions/${id}`)
}

export const deleteTransaction = (id) => {
    return axios.delete(`/transactions/${id}`)
}

//SPECIFIC REQUESTS
export const getUserTransactionData = (transaction, id) => {
    return axios.get(`/transactions/${transaction}/${id}`)
}

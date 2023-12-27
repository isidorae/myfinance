import axios from './axios'

//GENERAL REQUESTS
export const addIncomeReq = (body) => {
    return axios.post('/transactions/income', body)
}

export const addExpenseReq = (body) => {
    return axios.post('/transactions/expense', body)
}

export const getTransactionsHistory = (id) => {
    return axios.get(`/transactions/${id}`)
}

//SPECIFIC REQUESTS
export const getUserTransactionData = (transaction, id) => {
    return axios.get(`/transactions/${transaction}/${id}`)
}

export const getUserTransactionDataByMonth = (month, transaction_type, id) => {
    return axios.get(`/transactions/${month}/${transaction_type}/${id}`)
}

export const getUserTransactionCategoryData = (transaction, category, id) => {
    return axios.get(`/category/${transaction}/${category}/${id}`)
}

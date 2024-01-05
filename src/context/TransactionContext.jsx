import { createContext, useState} from "react";
import { addTransactionReq,
    getUserTransactionData,
    getTransactionsHistory,
    deleteTransaction
    } from "../hooks/userTransactions";


const TransactionContext = createContext()

const TransactionProvider = ({ children }) => {

const [incomeData, setIncomeData] = useState([])
const [expensesData, setExpensesData] = useState([])
const [transactionHistory, setTransactionHistory] = useState([])

//add expense || income
const sendTransactionReq = async (body, type, token) => {
    try {
        const res = await addTransactionReq(body, type, token)
        const data = await res.data.detail
        console.log(data)
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
    }
}


//get incomes & expenses
const getTransactionData = async (transaction, id, token) => {
    try {
        const res = await getUserTransactionData(transaction, id, token)
        const data = await res.data.detail
        
        if (transaction == "income") {
            console.log(data)
            return setIncomeData(data)
        } else {
            console.log(data)
            return setExpensesData(data)
        }
      
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
    }
}

//get all transactions
const getTransactionHistory = async (id, token) => {
    try {
        const res = await getTransactionsHistory(id, token)
        const data = await res.data.detail
        console.log(data)
        return setTransactionHistory(data)
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
    }
}

//delete expense || income
const deleteTransReq = async (id, token) => {
    try {
        const res = await deleteTransaction(id, token)
        const deleted = await res.data.detail
        console.log(deleted)
    } catch (error) {
        console.log(error)
        console.log(error.response)
    }
}

const data = {
    sendTransactionReq,
    getTransactionData,
    getTransactionHistory,
    deleteTransReq,
    setIncomeData, incomeData,
    setExpensesData,expensesData,
    transactionHistory
}

return (
    <TransactionContext.Provider value={data}>
        { children }
    </TransactionContext.Provider>
)

}

export { TransactionProvider }
export default TransactionContext;
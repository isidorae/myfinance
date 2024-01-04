import { createContext, useState} from "react";
import { useNavigate } from 'react-router-dom'
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
// const [selectedMonthIncomeData, setSelectedMonthIncomeData] = useState([])
// // const [selectedMonthExpensesData, setSelectedMonthExpensesData] = useState([])

const navigate = useNavigate()

//add expense || income
const sendTransactionReq = async (body, type, userId) => {
    try {
        const res = await addTransactionReq(body, type)
        const data = await res.data.detail
        console.log(data)
        if (type == "income") {
            getUserTransactionData("income", userId)
            return navigate('/dashboard/incomes')
        } else {
            getUserTransactionData("expense", userId)
            return navigate('/dashboard/expenses')
        }
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
    }
}


//get incomes & expenses
const getTransactionData = async (transaction, id) => {
    try {
        const res = await getUserTransactionData(transaction, id)
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
const getTransactionHistory = async (id) => {
    try {
        const res = await getTransactionsHistory(id)
        const data = await res.data.detail
        console.log(data)
        return setTransactionHistory(data)
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
    }
}

//delete expense || income
const deleteTransReq = async (id) => {
    try {
        const res = await deleteTransaction(id)
        const deleted = await res.data.detail
        console.log(deleted)
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
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
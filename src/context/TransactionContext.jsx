import { createContext, useState, useEffect} from "react";
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
const [inputsErr,  setInputsErr] = useState([])

useEffect(() => {
    resetErrMsg()
}, [inputsErr])

const resetErrMsg = () => {
    let timer;
    if (inputsErr.length > 0) {
        timer = setTimeout(() => {
            setInputsErr([])
        }, 5000)
    }

    return () => clearTimeout(timer)
}

//add expense || income
const sendTransactionReq = async (body, type, token) => {
    try {
        const res = await addTransactionReq(body, type, token)
        const data = await res.data.detail
        console.log(data)
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
        setInputsErr([error.response.data.message])
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
    transactionHistory,
    inputsErr
}

return (
    <TransactionContext.Provider value={data}>
        { children }
    </TransactionContext.Provider>
)

}

export { TransactionProvider }
export default TransactionContext;
import { createContext, useState} from "react";
import { addIncomeReq, addExpenseReq,
    getUserTransactionData,
    getUserTransactionDataByMonth,
    getUserTransactionCategoryData,
    getTransactionsHistory
    } from "../hooks/userTransactions";


const TransactionContext = createContext()

const TransactionProvider = ({ children }) => {

const [incomeData, setIncomeData] = useState([])
const [expensesData, setExpensesData] = useState([])
const [transactionHistory, setTransactionHistory] = useState([])
const [selectedMonthIncomeData, setSelectedMonthIncomeData] = useState([])
const [selectedMonthExpensesData, setSelectedMonthExpensesData] = useState([])

//get incomes & expenses
const getTransactionData = async (transaction, id) => {
    try {
        const res = await getUserTransactionData(transaction, id)
        const data = await res.data.detail
        console.log(data)
        
        if (transaction == "income") {
            return setIncomeData(data)
        } else {
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


const filterTransactionsByMonth = async (month, transaction, id) => {
    try {
        const res = await getUserTransactionDataByMonth(month, transaction, id)
        const data = await res.data.detail

        if (transaction == "income") {
            return setSelectedMonthIncomeData(data)
        } else {
            return setSelectedMonthExpensesData(data)
        }

    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
    }
}

const data = {
    getTransactionData,
    getTransactionHistory,
    filterTransactionsByMonth,
    setIncomeData,
    incomeData,
    setExpensesData,
    expensesData,
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
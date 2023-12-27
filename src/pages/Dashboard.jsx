import { useContext, useEffect } from "react"
import MainStruct from "../components/dashboard/MainStruct"
import DateComponent from "../components/general/DateComponent"
import TransactionContext from "../context/TransactionContext"

function Dashboard() {

    const { getTransactionData, getTransactionHistory, incomeData, expensesData } = useContext(TransactionContext)

    useEffect(() => {
      userTransactionsData()
    }, [])

    function userTransactionsData() {
        getTransactionData("expense", "id1")
        getTransactionData("income", "id1")
        getTransactionHistory("id1")
    }


    return (
        <>
        <div className="d-flex flex-column justify-content-center frame-view-parent">
        <h1 className="mt-5">Hola @Usuario</h1>
        <DateComponent />
        <MainStruct
        incomeData={incomeData}
        expensesData={expensesData}
        />
        </div>
        </>
    )
}

export default Dashboard
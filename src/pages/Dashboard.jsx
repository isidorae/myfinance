import { useContext, useEffect } from "react"
import MainStruct from "../components/dashboard/MainStruct"
import DateComponent from "../components/general/DateComponent"
import TransactionContext from "../context/TransactionContext"
import AuthContext from "../context/AuthContext"

function Dashboard() {

    const { getTransactionData, getTransactionHistory } = useContext(TransactionContext)
    const { userData } = useContext(AuthContext)

    console.log(userData.id)
    const userId = userData.id

    useEffect(() => {
      userTransactionsData()
    }, [])

    function userTransactionsData() {
        getTransactionData("expense", userId)
        getTransactionData("income", userId)
        getTransactionHistory(userId)
    }


    return (
        <>
        <div className="d-flex flex-column justify-content-center frame-view-parent">
        <h1 className="mt-5">Hola @Usuario</h1>
        <DateComponent />
        <MainStruct/>
        </div>
        </>
    )
}

export default Dashboard
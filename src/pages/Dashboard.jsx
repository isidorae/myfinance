import { useContext, useEffect } from "react"
import MainStruct from "../components/dashboard/MainStruct"
import DateComponent from "../components/general/DateComponent"
import TransactionContext from "../context/TransactionContext"
import AuthContext from "../context/AuthContext"

function Dashboard() {

    const { getTransactionData, getTransactionHistory } = useContext(TransactionContext)
    const { userData, token } = useContext(AuthContext)
    
    const userId = userData.id

    console.log(userData.id)

    useEffect(() => {
      userTransactionsData()
    }, [])

    function userTransactionsData() {
        getTransactionData("expense", userId, token)
        getTransactionData("income", userId, token)
        getTransactionHistory(userId, token)
    }


    return (
        <>
        <div className="d-flex flex-column justify-content-center frame-view-parent">
        <h1 className="mt-5">Hola @{userData.username}</h1>
        <DateComponent />
        <MainStruct/>
        </div>
        </>
    )
}

export default Dashboard
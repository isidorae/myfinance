import { useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import HistoryComp from "../components/history/HistoryComp"
import TransactionContext from "../context/TransactionContext"
import AuthContext from "../context/AuthContext"

function Transactions() {

    const navigate = useNavigate()

    const {getTransactionHistory} = useContext(TransactionContext)
    const {userData, isAuth, token} = useContext(AuthContext)
    console.log(userData)
    const userId = userData.id

    useEffect(() => {
        if (isAuth) {
            navigate('/history')
            userTransactionsData()
          } else {
            navigate('/login')
          }

    }, [])

    // useEffect(() => {
    //     userTransactionsData()
    //   }, [])
  
      function userTransactionsData() {
          getTransactionHistory(userId, token)
      }

    return (
        <>
         <div className="frame-view-parent" >
            <HistoryComp />
        </div>
        </>
    )
}

export default Transactions
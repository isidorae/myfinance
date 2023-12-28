import { useContext, useEffect } from "react"
import HistoryComp from "../components/history/HistoryComp"
import TransactionContext from "../context/TransactionContext"

function Transactions() {

    const {getTransactionHistory} = useContext(TransactionContext)

    useEffect(() => {
        userTransactionsData()
      }, [])
  
      function userTransactionsData() {
          getTransactionHistory("id1")
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
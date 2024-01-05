import AuthContext from '../../context/AuthContext'
import TransactionContext from '../../context/TransactionContext'
import '../general.css'
import { useContext } from 'react'

function TransactionCard({id, title, amount, comment, date, transaction_type}) {

    const { deleteTransReq, getTransactionData } = useContext(TransactionContext)
    const { userData, token} = useContext(AuthContext)

    let transaction_value = ""

    if (transaction_type === "income") {
        transaction_value = "+"
    } else {
        transaction_value = "-"
    }

    function deleteTransaction(id, type, token) {
        console.log(id)
        deleteTransReq(id, token)
        .then(() => {
            if(type === "income") {
                getTransactionData("income", userData.id, token)
            } else {
                getTransactionData("expense", userData.id, token)
            }
        });
    }

    return (
        <>
        <div className="transaction-card d-flex align-items-start justify-content-between">
            <section key={id} className="d-flex">
                <p className="me-2">
                <b className="dmserif-font">{title}</b>
                </p>
                <p className="me-2">{transaction_value} ${new Intl.NumberFormat().format(amount)}</p>
                <p className="me-2"><small>{comment}</small></p>
                <p className="me-2">{date}</p>
            </section>
            <section>
             <button onClick={() => deleteTransaction(id, transaction_type, token)} className="text-center del-btn">X</button>
            </section>
         </div>
        </>
    )
}

export default TransactionCard
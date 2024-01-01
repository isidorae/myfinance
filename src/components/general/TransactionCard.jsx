import TransactionContext from '../../context/TransactionContext'
import '../general.css'
import { useContext } from 'react'

function TransactionCard({id, title, amount, comment, date, transaction_type}) {

    const { deleteTransReq } = useContext(TransactionContext)

    let transaction_value = ""

    if (transaction_type === "income") {
        transaction_value = "+"
    } else {
        transaction_value = "-"
    }

    function deleteTransaction(id) {
        console.log(id)
        deleteTransReq(id)
        .then(() => window.location.reload());
    }

    return (
        <>
        <div className="transaction-card d-flex align-items-start justify-content-between">
            <section key={id} className="d-flex">
                <p className="me-2">
                <b className="dmserif-font">{title}</b>
                </p>
                <p className="me-2">{transaction_value} ${amount}</p>
                <p className="me-2"><small>{comment}</small></p>
                <p className="me-2">{date}</p>
            </section>
            <section>
             <button onClick={() => deleteTransaction(id)} className="text-center del-btn">X</button>
            </section>
         </div>
        </>
    )
}

export default TransactionCard
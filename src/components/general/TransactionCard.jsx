import '../general.css'

function TransactionCard({title, amount, comment}) {

    return (
        <>
        <div className="transaction-card d-flex align-items-start justify-content-between">
            <section className="d-flex">
                <p className="me-2">
                <b>{title}</b>
                </p>
                <p className="me-2">${amount}</p>
                <p className="me-2">{comment}</p>
            </section>
            <section>
             <button className="text-center del-btn">X</button>
            </section>
         </div>
        </>
    )
}

export default TransactionCard
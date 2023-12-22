import '../general.css'

function TransactionCard({title, amount, comment, date}) {

    return (
        <>
        <div className="transaction-card d-flex align-items-start justify-content-between">
            <section className="d-flex">
                <p className="me-2">
                <b className="dmserif-font">{title}</b>
                </p>
                <p className="me-2">${amount}</p>
                <p className="me-2"><small>{comment}</small></p>
                <p className="me-2">{date}</p>
            </section>
            <section>
             <button className="text-center del-btn">X</button>
            </section>
         </div>
        </>
    )
}

export default TransactionCard
import "./dashboard.css"

function ExpensesIncomeSummary({incomeSum, expensesSum}) {

    const difference =  incomeSum - expensesSum;

    let differenceSign;

    if (difference > 0) {
        differenceSign="+"
    } else {
        differenceSign=""
    }

    let negativeDifferenceSlice = difference.toString().slice(1, difference.toString().length)

    return(
        <div className="box-container d-flex flex-column justify-content-center">
            <h2>Resumen General</h2>
            <section className="dash-exp-card d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <p className="me-2">Gastos</p>
                </div>
                <div>
                    <p className="font-large justify-self-end">${new Intl.NumberFormat().format(expensesSum)}</p>
                </div>
            </section>
            <section className="dash-exp-card d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <p className="me-2">Ingresos</p>
                </div>
                <div>
                    <p className="font-large justify-self-end">${new Intl.NumberFormat().format(incomeSum)}</p>
                </div>
            </section>
            <section className="dash-exp-card d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <p className="me-2">Diferencia</p>
                </div>
                <div className={`${difference > 0 ? 'positive-diff' : 'negative-diff'} ${difference === 0 && 'empty-style'}`}>
                    <p className="font-large justify-self-end">
                        $ {differenceSign} {new Intl.NumberFormat().format(difference)}
                        </p>
                </div>
            </section>
        </div>
        
    )
}

export default ExpensesIncomeSummary
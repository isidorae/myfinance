import "../dashboard.css"

function ExpensesIncomeSummary() {

    return(
        <div className="box-container">
            <h2>Resumen General</h2>
            <section className="dash-exp-card d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <p className="me-2">Gastos</p>
                </div>
                <div>
                    <p className="font-large justify-self-end">$100000</p>
                </div>
            </section>
            <section className="dash-exp-card d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <p className="me-2">Ingresos</p>
                </div>
                <div>
                    <p className="font-large justify-self-end">$200000</p>
                </div>
            </section>
            <section className="dash-exp-card d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <p className="me-2">Diferencia</p>
                </div>
                <div>
                    <p className="font-large justify-self-end">+ $100000</p>
                </div>
            </section>
        </div>
        
    )
}

export default ExpensesIncomeSummary
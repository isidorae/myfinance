import ExpensesMain from "../components/expenses/ExpensesMain"
import DateComponent from "../components/general/DateComponent"

function Expenses() {

    return(
        <>
        <div className="frame-view-parent d-flex flex-column" >
            <h1>Gastos</h1>
            <DateComponent />
            <ExpensesMain />
        </div>
        </>
    )
}

export default Expenses
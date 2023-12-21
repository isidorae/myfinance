import IncomeMain from '../components/incomes/IncomeMain'
import DateComponent from '../components/general/DateComponent'

function Incomes() {
    
    return(
        <>
        <div className="frame-view-parent d-flex flex-column" >
            <h1>Ingresos</h1>
            <DateComponent />
            <IncomeMain />
        </div>
        </>
    )
}

export default Incomes
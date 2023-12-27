import '../general.css'
import DateComponent from '../general/DateComponent';
import PaginationBtns from '../general/PaginationBtns';
import TransactionCard from '../general/TransactionCard'

function HistoryComp() {

   return(
    <>
    <div className="dashboard-items-container p-5 mt-3">
    <h1>Historial</h1>
    <DateComponent />
    <section className="p-2">
        <TransactionCard
        title="Sueldo"
        amount="100000"
        comment="Sueldo microsoft full time"
        date="19/12/23"
        />
        <TransactionCard
        title="Sueldo"
        amount="100000"
        comment="Sueldo microsoft full time"
        date="19/12/23"
        />
        <TransactionCard
        title="Sueldo"
        amount="100000"
        comment="Sueldo microsoft full time"
        date="19/12/23"
        />
        <TransactionCard
        title="Sueldo"
        amount="100000"
        comment="Sueldo microsoft full time"
        date="19/12/23"
        />
        <TransactionCard
        title="Sueldo"
        amount="100000"
        comment="Sueldo microsoft full time"
        date="19/12/23"
        />
    </section>
    <PaginationBtns/>
    </div>
    </>
   )
}

export default HistoryComp
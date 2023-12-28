import '../general.css'
import { useContext, useState } from 'react';
import DateComponent from '../general/DateComponent';
import PaginationBtns from '../general/PaginationBtns';
import TransactionCard from '../general/TransactionCard'

import TransactionContext from '../../context/TransactionContext';
import DateContext from '../../context/DateContext';

function HistoryComp() {

    const {transactionHistory} = useContext(TransactionContext)
    const {selectedMonth, selectedYear} = useContext(DateContext)


    //CREAR NUEVO ARRAY CON TRANSACTIONS QUE QUE COINCIDAN CON MES Y AÑO SELECCIONADO
    const historyFilterDataByMonth = transactionHistory.filter(transaction => {
        let date = transaction.date
        let splitdate = date.slice(3, 8)
        // console.log(splitdate)
        return splitdate == `${selectedMonth}/${selectedYear}`
     })
    //  console.log("testfilterdata", historyFilterDataByMonth) //testeando nuevo array creado segun mes y año seleccionado ✅

//****************************** PAGINATION ****************************** /

    const [pageIndex, setPageIndex] = useState(0)
    const itemsPerPage = 2;

    const startIndex = pageIndex * itemsPerPage; 
    const endIndex = Math.min((pageIndex + 1) * itemsPerPage, historyFilterDataByMonth.length)
    let transactionsToDisplay = historyFilterDataByMonth.slice(startIndex, endIndex);

    const changeTrscPage = (value) => {
        if (value === 'prev' && pageIndex > 0) {
            setPageIndex((prevPageIndex) => prevPageIndex - 1);
        } else if (value === 'next' && pageIndex < Math.ceil(historyFilterDataByMonth.length / itemsPerPage) -1) {
            setPageIndex((prevPageIndex) => prevPageIndex + 1);
        }
    }

   return(
    <>
    <div className="dashboard-items-container p-5 mt-3">
    <h1>Historial</h1>
    <DateComponent/>
    <section className="p-2">
        {transactionsToDisplay.map(data => {
                return <>
                <TransactionCard
                key={data._id}
                title={data.title}
                amount={data.amount}
                comment={data.comment}
                date={data.date}
                />
            </>
            })
        }
        {historyFilterDataByMonth.length === 0 && <p>Mes sin datos.</p>}
    </section>
    <PaginationBtns
    arrowsFunction={changeTrscPage}
    data={historyFilterDataByMonth}
    itemsPerPage={itemsPerPage}
    setPageIndex={setPageIndex}
    pageIndex={pageIndex}
    />
    </div>
    </>
   )
}

export default HistoryComp
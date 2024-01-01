import '../general.css'
import { useContext, useState, useEffect } from 'react';
import DateComponent from '../general/DateComponent';
import PaginationBtns from '../general/PaginationBtns';
import TransactionCard from '../general/TransactionCard'

import TransactionContext from '../../context/TransactionContext';
import DateContext from '../../context/DateContext';

function HistoryComp() {

    const {transactionHistory} = useContext(TransactionContext)
    const {selectedMonth, selectedYear} = useContext(DateContext)

//****************************** GET DATA BY MONTH ************************* /

    //CREAR NUEVO ARRAY CON TRANSACTIONS QUE QUE COINCIDAN CON MES Y AÑO SELECCIONADO
    const historyFilterDataByMonth = transactionHistory.filter(transaction => {
        let date = transaction.date
        let splitdate = date.slice(3, 8)
        // console.log(splitdate)
        return splitdate == `${selectedMonth}/${selectedYear}`
     })
    //  console.log("testfilterdata", historyFilterDataByMonth) //testeando nuevo array creado segun mes y año seleccionado ✅

       //******* SORT by date (latest added goes first) */
       let HistoryByMonth_SORTED = historyFilterDataByMonth.sort((a, b) => {
        console.log(a.date.slice(0,2))
        return b.date.slice(0,2) - a.date.slice(0,2);
           })
        console.log(HistoryByMonth_SORTED)

//****************************** PAGINATION ****************************** /

    const [pageIndex, setPageIndex] = useState(0)
    const itemsPerPage = 10;

    const startIndex = pageIndex * itemsPerPage; 
    const endIndex = Math.min((pageIndex + 1) * itemsPerPage, HistoryByMonth_SORTED.length)
    let transactionsToDisplay = HistoryByMonth_SORTED.slice(startIndex, endIndex);

    const changeTrscPage = (value) => {
        if (value === 'prev' && pageIndex > 0) {
            setPageIndex((prevPageIndex) => prevPageIndex - 1);
        } else if (value === 'next' && pageIndex < Math.ceil(HistoryByMonth_SORTED.length / itemsPerPage) -1) {
            setPageIndex((prevPageIndex) => prevPageIndex + 1);
        }
    }

     //**** reset page index to first page */
     useEffect(() => {
        setPageIndex(0)
    }, [selectedMonth, selectedYear])

   return(
    <>
    <div className="dashboard-items-container p-5 mt-3">
    <h1>Historial</h1>
    <DateComponent/>
    <section className="p-2">
        {transactionsToDisplay.map(data => {
                return <>
                <TransactionCard
                id={data._id}
                title={data.title}
                amount={data.amount}
                comment={data.comment}
                date={data.date}
                transaction_type={data.transaction_type}
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
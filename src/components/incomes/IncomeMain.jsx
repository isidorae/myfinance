import './incomes.css'
import '../general.css'
import { useContext, useState, useEffect } from 'react'
import AddTransaction from '../general/AddTransaction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TransactionCard from '../general/TransactionCard';
import PaginationBtns from '../general/PaginationBtns';
import TransactionContext from '../../context/TransactionContext';
import DateContext from '../../context/DateContext';

import { categories } from '../general/income_categories.json'

function IncomeMain() {

    const {getTransactionData, incomeData, setIncomeData} = useContext(TransactionContext)
    const {selectedMonth, selectedYear} = useContext(DateContext)

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        getTransactionData("income", "id1")
    }

    //****************************** GET DATA BY MONTH ************************* /

    const filterIncomesByMonth = incomeData.filter(income => {
        let date = income.date
        let splitdate = date.slice(3, 8)
        // console.log(splitdate)
        return splitdate == `${selectedMonth}/${selectedYear}`
     })

     //****************************** PAGINATION ****************************** /

     const [pageIndex, setPageIndex] = useState(0)
     const itemsPerPage = 5;
 
     const startIndex = pageIndex * itemsPerPage; 
     const endIndex = Math.min((pageIndex + 1) * itemsPerPage, filterIncomesByMonth.length)
     let incomesToDisplay = filterIncomesByMonth.slice(startIndex, endIndex);
 
     const changeIncomesPage = (value) => {
         if (value === 'prev' && pageIndex > 0) {
             setPageIndex((prevPageIndex) => prevPageIndex - 1);
         } else if (value === 'next' && pageIndex < Math.ceil(filterIncomesByMonth.length / itemsPerPage) -1) {
             setPageIndex((prevPageIndex) => prevPageIndex + 1);
         }
     }

    //**** reset page index to first page */
    useEffect(() => {
        setPageIndex(0)
    }, [selectedMonth, selectedYear])


    return(
        <>
        <div className="dashboard-items-container p-3">
            <Container className="">
                <Row>
                    <Col>
                        <div className="box-container d-flex flex-column align-items-center">
                            <h2>Agregar</h2>
                            <AddTransaction
                            categories={categories}
                            placeholder="Nombre ingreso"
                            TransType="income"
                            />
                        </div>
                    </Col>
                    <Col>
                    <div className="box-container">
                        <h2>Historial</h2>
                        <section className="d-flex flex-column align-items-start">
                            {incomesToDisplay.map(data => {
                                return <>
                                 <TransactionCard
                                key={data._id}
                                title={data.title}
                                amount={data.amount}
                                comment={data.comment}
                                date={data.date}
                            />
                                </>
                            })}
                            {filterIncomesByMonth.length === 0 && <p>Mes sin datos.</p>}
                        </section>
                        <PaginationBtns
                        arrowsFunction={changeIncomesPage}
                        data={filterIncomesByMonth}
                        itemsPerPage={itemsPerPage}
                        setPageIndex={setPageIndex}
                        pageIndex={pageIndex}
                        />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default IncomeMain
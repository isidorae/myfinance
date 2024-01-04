import '../general.css'
import { useContext, useEffect, useState } from 'react'
import AddTransaction from '../general/AddTransaction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TransactionCard from '../general/TransactionCard';
import PaginationBtns from '../general/PaginationBtns';
import TransactionContext from '../../context/TransactionContext';
import DateContext from '../../context/DateContext';

import { categories } from '../general/categories.json'
import AuthContext from '../../context/AuthContext';

function ExpensesMain() {

    const {getTransactionData, expensesData } = useContext(TransactionContext)
    const { userData } = useContext(AuthContext)
    const {selectedMonth, selectedYear} = useContext(DateContext)
    const [reloadData, setReloadData ] = useState(false)

    useEffect(() => {
        getData()
        setReloadData(false)
        // if (reloadData) {
        //     getData()
        //     setReloadData(false)
        // }
    }, [reloadData])

    function getData(){
        getTransactionData("expense", userData.id)
    }

    //********* RELOAD DATA WHEN TRANSACTION ADDED */
  

     //****************************** GET DATA BY MONTH ************************* /

     console.log(expensesData)

        const filterExpensesByMonth = expensesData.filter(expense => {
            let date = expense.date
            let splitdate = date.slice(3, 8)
            // console.log(splitdate)
            return splitdate == `${selectedMonth}/${selectedYear}`
         })
    
         //******* SORT by date (latest added goes first) */
         let ExpensesByMonth_SORTED = filterExpensesByMonth.sort((a, b) => {
         console.log(a.date.slice(0,2))
         return b.date.slice(0,2) - a.date.slice(0,2);
            })
         console.log(ExpensesByMonth_SORTED)
        
         //****************************** PAGINATION ****************************** /
    
         const [pageIndex, setPageIndex] = useState(0)
         const itemsPerPage = 5;
     
         const startIndex = pageIndex * itemsPerPage; 
         const endIndex = Math.min((pageIndex + 1) * itemsPerPage, ExpensesByMonth_SORTED.length)
         let expensesToDisplay = ExpensesByMonth_SORTED.slice(startIndex, endIndex);
     
         const changeExpensesPage = (value) => {
             if (value === 'prev' && pageIndex > 0) {
                 setPageIndex((prevPageIndex) => prevPageIndex - 1);
             } else if (value === 'next' && pageIndex < Math.ceil(ExpensesByMonth_SORTED.length / itemsPerPage) -1) {
                 setPageIndex((prevPageIndex) => prevPageIndex + 1);
             }
         }
    
        //**** reset page index to first page */
        useEffect(() => {
            setPageIndex(0)
        }, [selectedMonth, selectedYear])
  
    

    return (
        <>
        <div className="dashboard-items-container p-3">
            <Container className="">
                <Row>
                    <Col>
                        <div className="box-container d-flex flex-column align-items-center">
                            <h2>Añadir Gasto</h2>
                            <AddTransaction
                            categories={categories}
                            placeholder="Nombre egreso"
                            TransType="expense"
                            />
                        </div>
                    </Col>
                    <Col>
                    <div className="box-container">
                        <h2>Historial</h2>
                        <section className="d-flex flex-column align-items-start">
                        { expensesData.length > 0

                            ? <>{expensesToDisplay.map(expense => {
                                return <>
                                <TransactionCard
                                id={expense._id}
                                title={expense.title}
                                amount={expense.amount}
                                comment={expense.comment}
                                date={expense.date}
                                transaction_type={expense.transaction_type}
                                setReloadData={setReloadData}
                            />
                                </>
                            })}
                            {filterExpensesByMonth.length === 0 && <p>Mes sin datos.</p>} </>
                            : <p>Sin datos.</p>
                        
                        }
                            
                        </section>
                        <PaginationBtns
                        arrowsFunction={changeExpensesPage}
                        data={filterExpensesByMonth}
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

export default ExpensesMain
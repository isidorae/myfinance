import "./dashboard.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect } from "react";

import ExpensesDashboard from "./ExpensesDashboard";
import HistoryDashboard from "./HistoryDashboard";
import ExpensesIncomeSummary from "./ExpensesIncomeSummary";
import IncomeDashboard from "./IncomeDashboard";

import TransactionContext from "../../context/TransactionContext";
import DateContext from "../../context/DateContext";

function MainStruct({incomeData, expensesData}) {

    //*********** history array ordered by date */
    const { transactionHistory } = useContext(TransactionContext)
    const { selectedMonth, selectedYear } = useContext(DateContext)

    console.log("selectedMonth", selectedMonth) //formato 01, 02, 03, ... 12 etc
    console.log("selectedYear:", selectedYear) //formato 23, 24, etcc.... 

    //CREAR NUEVO ARRAY CON TRANSACTIONS QUE QUE COINCIDAN CON MES Y AÑO SELECCIONADO
    const historyFilterDataByMonth = transactionHistory.filter(transaction => {
       let date = transaction.date
       let splitdate = date.slice(3, 8)
       console.log(splitdate)
       return splitdate == `${selectedMonth}/${selectedYear}`
    })
    console.log("testfilterdata", historyFilterDataByMonth) //testeando nuevo array creado segun mes y año seleccionado ✅

    let lastFiveTransactions = historyFilterDataByMonth.slice((historyFilterDataByMonth.length - 5), (historyFilterDataByMonth.length))
    console.log(lastFiveTransactions)

    return(
        <>
        <div>
            <Container className="dashboard-items-container p-2">
                <Row>
                    <Col>
                       <ExpensesIncomeSummary/>
                    </Col>
                    <Col>
                        <HistoryDashboard
                        historyData={lastFiveTransactions}/>
                    </Col>
                </Row>
                <Row className="p-2">
                     <Col>
                        <ExpensesDashboard
                        expensesData={expensesData}/>
                    </Col>
                    <Col>
                        <IncomeDashboard
                        incomeData={incomeData}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )

}
export default MainStruct;
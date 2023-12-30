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

function MainStruct() {

    //*********** history array ordered by date */
    const { transactionHistory, incomeData, expensesData } = useContext(TransactionContext)
    const { selectedMonth, selectedYear } = useContext(DateContext)

    console.log("selectedMonth", selectedMonth) //formato 01, 02, 03, ... 12 etc
    console.log("selectedYear:", selectedYear) //formato 23, 24, etcc.... 

    //************************************ HISTORY BY MONTH  ************************/
    //CREAR NUEVO ARRAY CON TRANSACTIONS QUE QUE COINCIDAN CON MES Y AÑO SELECCIONADO
    const historyFilterDataByMonth = transactionHistory.filter(transaction => {
       let date = transaction.date
       let splitdate = date.slice(3, 8)
       console.log(splitdate)
       return splitdate == `${selectedMonth}/${selectedYear}`
    })
    console.log("testfilterdata", historyFilterDataByMonth) //testeando nuevo array creado segun mes y año seleccionado ✅

    //**** show last 5 transactions */
    let lastFiveTransactions = historyFilterDataByMonth.slice((historyFilterDataByMonth.length - 5), (historyFilterDataByMonth.length))
    console.log(lastFiveTransactions)

     //************************************ RESUMEN GENERAL************************/

      //*** SUMA incomes  ****/
    const incomeDataFilterByMonth = incomeData.filter(income => {
        let date = income.date;
        let splitdate = date.slice(3, 8)
        return splitdate == `${selectedMonth}/${selectedYear}`
    })
    console.log(incomeDataFilterByMonth)
    let incomeSum = 0;

    const sumIncomes = incomeDataFilterByMonth.forEach(income => {
        let amountToInt= parseInt(income.amount)
        return incomeSum += amountToInt
    })

    console.log("income sum:", incomeSum)

     //*** SUMA expenses  ****/
     const expenseDataFilterByMonth = expensesData.filter(expense => {
        let date = expense.date;
        let splitdate = date.slice(3, 8)
        return splitdate == `${selectedMonth}/${selectedYear}`
    })
    console.log(expenseDataFilterByMonth)
    let expensesSum = 0;

    const sumExpenses = expenseDataFilterByMonth.forEach(expense => {
        let amountToInt= parseInt(expense.amount)
        return expensesSum += amountToInt
    })

    console.log("expenses sum:", expensesSum)
   


    return(
        <>
        <div>
            <Container className="dashboard-items-container p-2">
                <Row>
                    <Col>
                       <ExpensesIncomeSummary
                       incomeSum={incomeSum}
                       expensesSum={expensesSum}/>
                    </Col>
                    <Col>
                        <HistoryDashboard
                        historyData={lastFiveTransactions}/>
                    </Col>
                </Row>
                <Row className="p-2">
                     <Col>
                        <ExpensesDashboard
                        expensesData={expenseDataFilterByMonth }/>
                    </Col>
                    <Col>
                        <IncomeDashboard
                        incomeData={incomeDataFilterByMonth}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )

}
export default MainStruct;
import "./dashboard.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect } from "react";

import ExpensesDashboard from "./ExpensesDashboard";
import HistoryDashboard from "./HistoryDashboard";
import ExpensesIncomeSummary from "./ExpensesIncomeSummary";
import IncomeDashboard from "./IncomeDashboard";
import ExpenseChart from "./expenseChart";

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
    console.log("transaction story", transactionHistory)
    console.log("testfilterdata", historyFilterDataByMonth) //testeando nuevo array creado segun mes y año seleccionado ✅

    //**** show last 5 transactions */
    let lastFiveTransactions = historyFilterDataByMonth.slice((historyFilterDataByMonth.length - 5), (historyFilterDataByMonth.length))
    console.log(lastFiveTransactions)

         //******* SORT by date the last 5 transactions */
         let lastFive_SORTED = lastFiveTransactions.sort((a, b) => {
            console.log(a.date.slice(0,2))
            return b.date.slice(0,2) - a.date.slice(0,2);
               })

     //************************************ RESUMEN GENERAL************************/

      //*** SUMA incomes  ****/
    const incomeDataFilterByMonth = incomeData.filter(income => {
        let date = income.date;
        let splitdate = date.slice(3, 8)
        return splitdate == `${selectedMonth}/${selectedYear}`
    })
    console.log(incomeDataFilterByMonth)
    let incomeSum = 0; //acumulator

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
    let expensesSum = 0; //acumulator


    const sumExpenses = expenseDataFilterByMonth.forEach(expense => {
        let amountToInt= parseInt(expense.amount)
        return expensesSum += amountToInt
    })

    console.log("expenses sum:", expensesSum)
   
    //************************************ RESUMEN GASTOS ************************/

    console.log("***** expenses dashboard ******")
    console.log(expensesData)
  
    //filtrar por categoria, luego sumar amounts
    function calculateCategorySum(data, categoryName) {
      let categorySum = 0;
  
      data
      .filter(expense => expense.category == categoryName)
      .forEach(expense => {
        let amountToInt = parseInt(expense.amount);
        categorySum += amountToInt;
      })
  
      return categorySum;
    }
  
    let foodSum = calculateCategorySum(expensesData, "alimentación");
    let healthSum = calculateCategorySum(expensesData, "salud e higiene");
    let homeSum = calculateCategorySum(expensesData, "hogar");
    let transportSum = calculateCategorySum(expensesData, "transporte");
    let accountsSum = calculateCategorySum(expensesData, "cuentas");
    let dressSum = calculateCategorySum(expensesData, "vestuario");
    let educationSum = calculateCategorySum(expensesData, "educación");
    let recreationSum = calculateCategorySum(expensesData, "entretención");
    let tecnoSum = calculateCategorySum(expensesData, "tecnología");
    let beautySum = calculateCategorySum(expensesData, "estética y belleza");
    let travelSum = calculateCategorySum(expensesData, "viajes");
    let otherSum = calculateCategorySum(expensesData, "otros");
    let petsSum = calculateCategorySum(expensesData, "mascotas");
    let investSum = calculateCategorySum(expensesData, "inversión");

    const expensesObj = {
        foodSum,
        healthSum,
        homeSum,
        transportSum,
        accountsSum,
        dressSum,
        educationSum,
        recreationSum,
        tecnoSum,
        beautySum,
        travelSum,
        otherSum,
        petsSum,
        investSum
    }

    //********get each expenses %%% of total expenses
    const getPercentageExpenseCateg = (expense) => {
        const percentage = Math.round((expense * 100)/ expensesSum)
        const rounded_p = percentage.toFixed(1)
        console.log(percentage)
        return rounded_p
    }

    const food_p = getPercentageExpenseCateg(foodSum)
    const health_p = getPercentageExpenseCateg(healthSum)
    const home_p = getPercentageExpenseCateg(homeSum)
    const transport_p = getPercentageExpenseCateg(transportSum)
    const accounts_p = getPercentageExpenseCateg(accountsSum)
    const dress_p = getPercentageExpenseCateg(dressSum)
    const education_p = getPercentageExpenseCateg(educationSum)
    const recreation_p = getPercentageExpenseCateg(recreationSum)
    const tecno_p = getPercentageExpenseCateg(tecnoSum)
    const beauty_p = getPercentageExpenseCateg(beautySum)
    const travel_p = getPercentageExpenseCateg(travelSum)
    const other_p = getPercentageExpenseCateg(otherSum)
    const pets_p = getPercentageExpenseCateg(petsSum)
    const invest_p = getPercentageExpenseCateg(investSum)

    const exp_p_obj = {
        food_p,
        health_p,
        home_p,
        transport_p,
        accounts_p,
        dress_p,
        education_p,
        recreation_p,
        tecno_p,
        beauty_p,
        travel_p,
        other_p,
        pets_p,
        invest_p
    }

    //*************** CHART JS ARRAY */

    const chartData = [
        {
            expense: "Hogar",
            value: homeSum,
            perc: home_p
        },
        {
            expense: "Educación",
            value: educationSum,
            perc: education_p
        },
        {
            expense: "Entretención",
            value: recreationSum,
            perc: recreation_p
        },
        {
            expense: "Alimentación",
            value: foodSum,
            perc: food_p
        },
        {
            expense: "Belleza",
            value: beautySum,
            perc: beauty_p
        },
        {
            expense: "Transporte",
            value: transportSum,
            perc: transport_p
        },
        {
            expense: "Cuentas",
            value: accountsSum,
            perc: accounts_p
        },
        {
            expense: "Mascotas",
            value: petsSum,
            perc: pets_p
        },
        {
            expense: "Salud",
            value: healthSum,
            perc: health_p
        },
        {
            expense: "Vestuario",
            value: dressSum,
            perc: dress_p
        },
        {
            expense: "Inversión",
            value: investSum,
            perc: invest_p
        },
        {
            expense: "Tecnología",
            value: tecnoSum,
            perc: invest_p
        },
        {
            expense: "Viajes",
            value: travelSum,
            perc: travel_p
        },
        {
            expense: "Otros",
            value: otherSum,
            perc: other_p
        }
    ]

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
                    {historyFilterDataByMonth.length < 5 
                        ? <HistoryDashboard
                        historyData={historyFilterDataByMonth}/>
                        : <HistoryDashboard
                        historyData={lastFive_SORTED}/>}
                    </Col>
                </Row>
                <Row className="p-2">
                     <Col>
                        <ExpensesDashboard
                        expensesObj={expensesObj}
                        percentage={exp_p_obj}
                        />
                    </Col>
                    <Col>
                        <IncomeDashboard
                        incomeData={incomeDataFilterByMonth}
                        />
                        <ExpenseChart
                        chartData={chartData}/>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )

}
export default MainStruct;
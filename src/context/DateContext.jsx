import { createContext, useState, useEffect, useRef } from "react";
import { months } from '../components/dashboard/months.json'

const DateContext = createContext()

const DateProvider = ({ children }) => {

    const years_arr = [2023, 2024]

    let defaultMonthValue;

    const [selectedMonth, setSelectedMonth] = useState("")
    const [selectedYear, setSelectedYear] = useState("")

    let refMonthSelect = useRef()

    const dateToday = new Date()
    const dateToString = JSON.stringify(dateToday)
    const dateFormatted = dateToString.slice(1,11) //YY-MM-DD
    const dateArr = dateFormatted.split("-")

    const dateDDMMYY = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}` //day/month/year format
    const dateNow_MONTH = dateArr[1] 
    const dateNow_YEAR = dateArr[0]

    console.log("YEAR NOW:", dateNow_YEAR.slice(2,5))

    useEffect(() => {
        setSelectedMonth(defaultMonthValue.value)
        setSelectedYear(dateNow_YEAR.slice(2,5))
        // getDefaultMonth()
        // console.log(selectedMonth)
    }, [])

    // function getDefaultMonth() {
    //     setSelectedMonth(refMonthSelect.current.value)
    // }
    
    switch(dateNow_MONTH) {
        case "01":
            defaultMonthValue = months[0]
            break;
        case "02":
            defaultMonthValue = months[1]
            break;
        case "03":
            defaultMonthValue = months[2]
            break;
        case "04":
            defaultMonthValue = months[3]
            break;
        case "05":
            defaultMonthValue = months[4]
            break;
        case "06":
            defaultMonthValue = months[5]
            break;
        case "07":
            defaultMonthValue = months[6]
            break;
        case "08":
            defaultMonthValue = months[7]
            break;
        case "09":
            defaultMonthValue = months[8]
            break;
        case "10":
            defaultMonthValue = months[9]
            break;
        case "11":
            defaultMonthValue = months[10]
            break;
        case "12":
            defaultMonthValue = months[11]
            break;
    }


    function showSelectedMonth(e) {
        setSelectedMonth(e.target.value)
        console.log(e.target.value)
    }

    function showSelectedYear(e) {
        setSelectedYear(e.target.value.slice(2,5))
        console.log("target year:", e.target.value.slice(2,5))
    }  

    const data = {
        years_arr,
        refMonthSelect,
        selectedMonth,
        selectedYear,
        defaultMonthValue,
        dateDDMMYY,
        dateNow_YEAR,
        showSelectedMonth,
        showSelectedYear
    }

    return (
        <DateContext.Provider value={data}>
            { children }
        </DateContext.Provider>
    )
}

export { DateProvider }
export default DateContext;
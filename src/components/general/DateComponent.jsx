import { useState, useEffect } from 'react'
import { months } from '../dashboard/months.json'
// import { getMonth, defaultMonthValue } from './getMonth';

function DateComponent() {

    let defaultMonthValue;

    const dateToday = new Date()
    const dateToString = JSON.stringify(dateToday)
    const dateFormatted = dateToString.slice(1,11)
    const dateArr = dateFormatted.split("-")
    const dateDDMMYY = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}` //day/month/year format
    console.log(dateDDMMYY)
    console.log(dateArr)

    const dateNow_MONTH = dateArr[1]
    const dateNow_YEAR = dateArr[0]
    console.log(dateNow_MONTH)
    console.log(typeof months[0])

    // useEffect(() => {
    //     getMonth(dateNow_MONTH)
    // }, [])

    const years_arr = [2023, 2024]

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

    console.log(defaultMonthValue)

    return (
        <>
        <div className="mb-4">
            <div className="d-flex justify-content-center">
                <p className="me-2">Fecha hoy:</p>
                <p>{dateDDMMYY}</p>
            </div>
            <label className="me-2">Resumen Mes</label>
            <select name="date" value="date" defaultValue="">
            <option defaultValue={defaultMonthValue}>{defaultMonthValue}</option>
                {months.map((month, index) => {
                    if (month != defaultMonthValue) {
                        return <option key={index}>{month}</option>
                    }
                })}
            </select>
            <label className="ms-2 me-2">y Año </label>
            <select name="year" value="year">
            <option defaultValue>{dateNow_YEAR}</option>
                {years_arr.map((year, index) => {
                    console.log(year)
                    if (year != dateNow_YEAR) {
                        return <option key={index} >{year}</option>
                    }
                })}
            </select>
        </div>
        </>
    )
}

export default DateComponent
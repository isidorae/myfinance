import { useContext, useEffect } from "react";
import { months } from "../dashboard/months.json";
import DateContext from "../../context/DateContext";

function DateComponent() {
  const {
    years_arr,
    refMonthSelect,
    defaultMonthValue,
    dateDDMMYY,
    dateNow_YEAR,
    showSelectedMonth,
    showSelectedYear,
  } = useContext(DateContext);

  return (
    <>
      <div className="mb-4">
        <div className="d-flex justify-content-center">
          <p className="me-2">Fecha hoy:</p>
          <p>{dateDDMMYY}</p>
        </div>
        <label className="me-2">Resumen Mes</label>
            <select
            key="select0123"
            ref={refMonthSelect}
            onChange={(e) => showSelectedMonth(e)}
            name="date"
            className="select-input"
            >
             <option key="defaultmonth0123" value={defaultMonthValue.value} defaultValue={defaultMonthValue.value}>
                        {defaultMonthValue.month}
              </option>
            {months.map((month, index) => {
                 if (month.month === defaultMonthValue.month) {
                  return console.log(`${month.month} is default.`)
                 }
                return (
                <option key={index} value={month.value}>
                    {month.month}
                </option>
                );
            })}
            </select>
            <label className="ms-2 me-2">y Año </label>
            <select
            onChange={(e) => showSelectedYear(e)}
            name="year"
            className="select-input"
            >
            <option defaultValue>{dateNow_YEAR}</option>
            {years_arr.map((year, index) => {
                if (year != dateNow_YEAR) {
                return <option key={index}>{year}</option>;
                }
            })}
            </select>
      </div>
    </>
  );
}

export default DateComponent;

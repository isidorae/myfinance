import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import "./dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({chartData}) {

    const filteredArr = chartData.filter(data => {
        return data.value > 0
    })

    const arrayOfValues =  filteredArr.map(data => data.value)
    const expensesLables = filteredArr.map(data => data.expense)

    const dataDisplay = {
        labels: expensesLables,
        datasets: [
            {
                data: arrayOfValues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(229, 159, 90, 0.2)',
                    'rgba(129, 153, 127, 0.2)',
                    'rgba(164, 148, 132, 0.2)',
                    'rgba(161, 149, 91, 0.2)',
                    'rgba(63, 67, 140, 0.2)',
                    'rgba(37, 15, 40, 0.2)',
                    'rgba(36, 28, 20, 0.2)',
                    'rgba(123, 123, 123, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                  ],
            }
        ]
    }

    return(
        <>
        <div>
            <h2><small>Gráfico Gastos</small></h2>
            <div className="chart-js-container d-flex flex-column align-items-center">
                {filteredArr.length === 0
                ? <p>Sin datos.</p>
                : <Doughnut
                data={dataDisplay} />}
        
            </div>
        </div>
        </>
    )
}

export default ExpenseChart;
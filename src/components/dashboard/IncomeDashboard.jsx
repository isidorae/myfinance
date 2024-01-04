import "./dashboard.css";
import { MdStars } from "react-icons/md";
import Card from "./Card";

function IncomeDashboard({incomeData}) {

  console.log("***** income dashboard ******")
  console.log(incomeData)

  return (
    <>
      <h2>Resumen Ingresos</h2>
      <section className="box-container d-flex flex-column justify-content-center">
        {incomeData.map((income) => {
          return <Card 
          key={income._id}
          icon={MdStars}
          title={income.title}
          value={income.amount}
        />
        })}
        {incomeData.length === 0 && <p>Mes sin ingresos.</p>}
      </section>
    </>
  );
}

export default IncomeDashboard;

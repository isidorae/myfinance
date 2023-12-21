import "../dashboard.css";
import { MdStars } from "react-icons/md";
import Card from "./Card";

function IncomeDashboard() {
  return (
    <>
      <h2>Resumen Ingresos</h2>
      <section className="box-container d-flex flex-column justify-content-center">
          <Card 
          icon={MdStars}
          title="Sueldo"
          value="100000"
        />
          <Card 
          icon={MdStars}
          title="Freelance"
          value="50000"
        />
          <Card 
          icon={MdStars}
          title="Mesada"
          value="50000"
        />
      </section>
    </>
  );
}

export default IncomeDashboard;

import "./dashboard.css";
import TransactionCard from "../general/TransactionCard";

function HistoryDashboard() {
  return (
    <>
      <div className="box-container">
        <h2>Últimos movimientos</h2>
        <section className="d-flex flex-column justify-content-center">
          <TransactionCard
            title="Bencina"
            amount="15000"
            comment="Bencina semanal"
            date="18/12/23"
          />
          <TransactionCard
            title="Cuadro"
            amount="10000"
            comment="Venta cuadro"
            date="16/12/23"
          />
          <TransactionCard
            title="Cuadro"
            amount="10000"
            comment="Venta cuadro"
            date="16/12/23"
          />
          <TransactionCard
            title="Cuadro"
            amount="10000"
            comment="Venta cuadro"
            date="16/12/23"
          />
          <TransactionCard
            title="Cuadro"
            amount="10000"
            comment="Venta cuadro"
            date="16/12/23"
          />
        </section>
      </div>
    </>
  );
}

export default HistoryDashboard;

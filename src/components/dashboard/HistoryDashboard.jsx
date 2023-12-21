import "./dashboard.css";
import TransactionCard from "../general/TransactionCard";

function HistoryDashboard() {
  return (
    <>
      <div className="box-container">
        <h2>Últimos movimientos</h2>
        <section className="d-flex flex-column align-items-start">
          <div className="history-card-container d-flex align-items-start justify-content-around">
            <p className="me-2">
              <b>Bencina</b>
            </p>
            <p className="me-2">-$15000</p>
            <p className="me-2">Bencina semanal</p>
            <button className="text-center del-btn">X</button>
          </div>
          <div className="history-card-container d-flex align-items-start justify-content-around">
            <p className="me-2">
              <b>Cuadro</b>
            </p>
            <p className="me-2">+$10000</p>
            <p className="me-2">Venta cuadro</p>
            <button className="align-content-end del-btn">X</button>
          </div>
          <div className="history-card-container d-flex align-items-start justify-content-around">
            <p className="me-2">
              <b>Cuadro</b>
            </p>
            <p className="me-2">+$10000</p>
            <p className="me-2">Venta cuadro</p>
            <button className="align-content-end del-btn">X</button>
          </div>
          <div className="history-card-container d-flex align-items-start justify-content-around">
            <p className="me-2">
              <b>Cuadro</b>
            </p>
            <p className="me-2">+$10000</p>
            <p className="me-2">Venta cuadro</p>
            <button className="align-content-end del-btn">X</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default HistoryDashboard;

import "./dashboard.css";
import TransactionCard from "../general/TransactionCard";

function HistoryDashboard({historyData}) {
  return (
    <>
      <div className="box-container">
        <h2>Últimos movimientos</h2>
        <section className="d-flex flex-column justify-content-center">
          {historyData.map(data => {
            return <>
             <TransactionCard
            key={data._id}
            title={data.title}
            amount={data.amount}
            comment={data.comment}
            date={data.date}
          />
            </>
          })}
          {historyData.length === 0 && 
          <p>Mes sin movimientos.</p>}
        </section>
      </div>
    </>
  );
}

export default HistoryDashboard;

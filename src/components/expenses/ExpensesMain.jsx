import '../general.css'
import AddTransaction from '../general/AddTransaction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TransactionCard from '../general/TransactionCard';
import PaginationBtns from '../general/PaginationBtns';

function ExpensesMain() {

    return (
        <>
        <div className="dashboard-items-container p-3">
            <Container className="">
                <Row>
                    <Col>
                        <div className="box-container d-flex flex-column align-items-center">
                            <h2>Añadir Gasto</h2>
                            <AddTransaction
                            placeholder="Nombre egreso"
                            TransType="expense"
                            />
                        </div>
                    </Col>
                    <Col>
                    <div className="box-container">
                        <h2>Historial Gastos</h2>
                        <section className="d-flex flex-column align-items-start">
                            <TransactionCard
                                title="Bencina"
                                amount="100000"
                                comment="bencina semanal"
                                date="20/12/23"
                            />
                            <TransactionCard
                                title="Comida"
                                amount="50000"
                                comment="comida semanal"
                                date="19/12/23"
                            />
                        </section>
                        <PaginationBtns />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default ExpensesMain
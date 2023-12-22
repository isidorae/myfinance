import './incomes.css'
import '../general.css'
import AddTransaction from '../general/AddTransaction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TransactionCard from '../general/TransactionCard';
import PaginationBtns from '../general/PaginationBtns';

function IncomeMain() {

    return(
        <>
        <div className="dashboard-items-container p-3">
            <Container className="">
                <Row>
                    <Col>
                        <div className="box-container d-flex flex-column align-items-center">
                            <h2>Agregar</h2>
                            <AddTransaction
                            placeholder="Nombre ingreso"
                            TransType="income"
                            />
                        </div>
                    </Col>
                    <Col>
                    <div className="box-container">
                        <h2>Historial</h2>
                        <section className="d-flex flex-column align-items-start">
                            <TransactionCard
                                title="Sueldo"
                                amount="100000"
                                comment="Sueldo microsoft full time"
                                date="19/12/23"
                            />
                            <TransactionCard
                                title="Freelance"
                                amount="50000"
                                comment="Arte"
                                date="18/12/23"
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

export default IncomeMain
import "./dashboard.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ExpensesDashboard from "./ExpensesDashboard";
import HistoryDashboard from "./HistoryDashboard";
import ExpensesIncomeSummary from "./ExpensesIncomeSummary";
import IncomeDashboard from "./IncomeDashboard";

function MainStruct() {

    return(
        <>
        <div>
            <Container className="dashboard-items-container p-2">
                <Row>
                    <Col>
                       <ExpensesIncomeSummary/>
                    </Col>
                    <Col>
                        <HistoryDashboard/>
                    </Col>
                </Row>
                <Row className="p-2">
                     <Col>
                        <ExpensesDashboard/>
                    </Col>
                    <Col>
                        <IncomeDashboard/>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )

}
export default MainStruct;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { IoMdPaper } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiBank } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";


function NavbarComp () {

const isAuth = true;

return (
    <>
      {/* <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/dashboard">MyFinance</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              { isAuth 
              ? <>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/dashboard">Transacciones</Nav.Link>
              <Nav.Link href="/dashboard">Gastos</Nav.Link>
              <Nav.Link href="/dashboard">Ingresos</Nav.Link>
              <Nav.Link href="#">Logout</Nav.Link>
                </>
              : <>
              <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
              </>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container>
        {isAuth
        ? <Navbar.Brand href="/dashboard">MyFinance</Navbar.Brand>
        : <Navbar.Brand href="/">MyFinance</Navbar.Brand>
         }
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isAuth
          ? <>
            <Nav className="me-auto">
              <NavDropdown title="Dashboard" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/dashboard"><IoMdPaper /> Resumen</NavDropdown.Item>
                <NavDropdown.Item href="/dashboard/incomes"><PiBank /> Ingresos</NavDropdown.Item>
                <NavDropdown.Item href="/dashboard/expenses"><FaRegMoneyBillAlt /> Gastos</NavDropdown.Item>
                <NavDropdown.Item href="/history"><FaMoneyBillTransfer /> Historial</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#">Logout</Nav.Link>
            </Nav>
            </>
          : <>
              <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
              </>
          
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
)

}

export default NavbarComp
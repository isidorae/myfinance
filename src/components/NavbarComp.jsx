import './general.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { IoMdPaper } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiBank } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

import { useContext } from 'react';
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

function NavbarComp () {

  const {isAuth, logoutFromApp} = useContext(AuthContext)

return (
    <>
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container>
        {isAuth
        ? <Navbar.Brand as={ Link } to="/dashboard" >MyFinance</Navbar.Brand>
        : <Navbar.Brand as={ Link } to="/">MyFinance</Navbar.Brand>
         }
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isAuth
          ? <>
            <Nav className="me-auto">
              <NavDropdown title="Dashboard" id="collapsible-nav-dropdown">
              <NavDropdown.Item  as={ Link } to="/dashboard"><IoMdPaper /> Resumen</NavDropdown.Item>
                <NavDropdown.Item as={ Link } to="/dashboard/incomes"><PiBank /> Ingresos</NavDropdown.Item>
                <NavDropdown.Item as={ Link } to="/dashboard/expenses"><FaRegMoneyBillAlt /> Gastos</NavDropdown.Item>
                <NavDropdown.Item as={ Link } to="/history"><FaMoneyBillTransfer /> Historial</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={() => logoutFromApp()} ><IoMdLogOut className="logout" title="cerrar sesión"/></Nav.Link> 
              {/* <button><IoMdLogOut className="logout" title="cerrar sesión"/></button> */}
            </Nav>
            </>
          : <>
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link as={ Link } to="/login"><FaRegCircleUser className="logout" title="iniciar sesión"/></Nav.Link>
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
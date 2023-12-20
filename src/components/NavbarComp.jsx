import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarComp () {

const isAuth = true;

return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/dashboard">MyFinance</Navbar.Brand>
          <Nav className="me-auto">
            { isAuth 
            ? <>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
              </>
            : <>
            <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
            </>}
          </Nav>
        </Container>
      </Navbar>
    </>
)

}

export default NavbarComp
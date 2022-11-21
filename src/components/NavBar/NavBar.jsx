import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidgets/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>                
                <img src="img/logo_manatour.png" alt="ManaTour"/>                
                <Navbar.Brand href="#home">Transfer Aeropuerto y Turismo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#tour">Tour</Nav.Link>
                        <Nav.Link href="#transfer">Transfer</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <Nav.Link href="#ubicacion">Ubicación</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
                <CartWidget/>
                
            </Container>
        </Navbar>
    )
}

export default NavBar
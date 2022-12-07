import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidgets/CartWidget';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img src="/img/logo_manatour.png" alt="ManaTour" />
                <Link className="navbar-brand" to="/">Transfer Aeropuerto y Turismo</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Button className="navlink" variant="light" size="lg">Home</Button>
                        </Link>
                        <Link to="/category/tour">
                            <Button className="navlink" variant="light" size="lg">Tour</Button>
                        </Link>
                        <Link to="/category/transfer">
                            <Button className="navlink" variant="light" size="lg">Transfer</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar
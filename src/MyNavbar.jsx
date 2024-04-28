import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"


function MyNavbar() {
    return (
    <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary'>
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto Navbar">
            <Link className="text-black-50 px-3 navbar" to="/">Home</Link>
            <Link className="text-black-50 px-3 navbar" to="/about">About</Link>
            <Link className="text-black-50 px-3 navbar" to="/contact">Contact</Link>
            <Link className="text-black-50 px-3 navbar" to="/Blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default MyNavbar;
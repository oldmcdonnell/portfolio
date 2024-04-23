import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"


function MyNavbar() {
    return (
    <Navbar className='bg-body-tertiary justify-content-between'>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="text-black-50 px-3" to="/">Home</Link>
            <Link className="text-black-50 px-3" to="/about">About</Link>
            <Link className="text-black-50 px-3 " to="/contact">Contact</Link>
            <Link className="text-black-50 px-3 " to="/Blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default MyNavbar;
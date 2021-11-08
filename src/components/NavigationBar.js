import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand>
            {/* <Image src="/images/OurNestLogo.png" alt="Our Nest Logo" height="100" /> */}
            <h1 className="text-secondary">M@X</h1>
            </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
          <Nav  className="ms-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/staff">Our Staff</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

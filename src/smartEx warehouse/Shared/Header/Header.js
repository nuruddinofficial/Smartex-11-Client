import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: " #0cbaba",
          backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
          height: "80px",
          fontFamily: "serif",
        }}
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h1>SmartEx</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link href="home#products">Products</Nav.Link>
              <Nav.Link href="home#new">New</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Manage Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">All Item</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">My Item</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="login">
                <Button
                  className="rounded-pill"
                  style={{
                    backgroundColor: " #0cbaba",
                    backgroundImage:
                      "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
                  }}
                >
                  Login
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

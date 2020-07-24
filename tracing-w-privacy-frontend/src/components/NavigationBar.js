import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">Contact Tracing Search Engine</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="/login">Gov Official</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = (props) => {
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
          {props.isLoggedIn ? (
            <span>
              Signed in as: <a href="/logout">Gov Official</a>
            </span>
          ) : (
            <a href="/login">Sign In</a>
          )}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

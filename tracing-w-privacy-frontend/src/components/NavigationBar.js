import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand to="/">Contact Tracing Search Engine</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/search">
          Search
        </Nav.Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {props.isLoggedIn ? (
            <span>
              Signed in as: <Link to="/logout">Gov Official</Link>
            </span>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

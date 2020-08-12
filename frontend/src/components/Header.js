import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="App-header">
      <h1>Tracing w Privacy</h1>
      <p> a contact tracing search engine for covid-19</p>
      <br />
      <Button variant="outline-primary" size="lg" as={Link} to="/search">
        Start Search
      </Button>
    </div>
  );
};

export default Header;

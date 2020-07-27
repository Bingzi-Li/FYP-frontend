import React from "react";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="App-header">
      <h1>Tracing w Privacy</h1>
      <p> a contact tracing search engine for covid-19</p>
      <br />
      <Button variant="outline-primary" size="lg" href="/search">
        Start Search
      </Button>
    </div>
  );
};

export default Header;

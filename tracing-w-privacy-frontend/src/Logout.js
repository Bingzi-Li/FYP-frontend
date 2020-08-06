import React from "react";
import Redirect from "react-router-dom/Redirect";
import Button from "react-bootstrap/Button";

const Logout = (props) => {
  return props.isLoggedIn ? (
    <div className="Body-outer">
      <div className="Body-inner">
        <Button
          onClick={() => {
            props.setIsLoggedIn(false);
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Logout;

import React from "react";
import Redirect from "react-router-dom/Redirect";
import Button from "react-bootstrap/Button";

const Logout = (props) => {
  const handleSignOut = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'status': 'signout'})
  };
  fetch('/users/signout', requestOptions)
      .then(response => response.json())
      .then(data => {console.log(data)});
    props.setIsLoggedIn(false);
  }
  return props.isLoggedIn ? (
    <div className="Body-outer">
      <div className="Body-inner">
        <Button
          onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Logout;

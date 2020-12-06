import React, {useEffect} from "react";
import Redirect from "react-router-dom/Redirect";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Login = (props) => {
  let username, password;

  const handleSignIn = () => {
    console.log(username, password);
    // TODO: validate the credentials
    //useEffect(() => {
      // POST request using fetch inside useEffect React hook
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({username: password})
      };
      fetch('/users/validate', requestOptions)
          .then(response => response.json())
          .then(data => {console.log(data)});
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
 // }, []);
    props.setIsLoggedIn(true);
  };

  return props.isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <div className="Body-outer">
      <div className="Body-inner">
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              User Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Normal text"
                onChange={(e) => {
                  username = e.target.value;
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  password = e.target.value;
                }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button onClick={handleSignIn}>Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;

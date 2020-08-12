import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PatientsTrajectory = (props) => {
  // trajectory Data
  let trajData = Array(14).fill({ date: "0000-00-00", node: {} });
  // trajectory UI
  let trajView = [];
  const [toggleView, setToggleView] = useState(false);

  const handleDateChange = (e) => {
    const i = parseInt(e.target.id.slice(14));
    const newData = {
      date: e.target.value,
      node: trajData[i]["node"],
    };
    trajData[i] = newData;
  };

  const findNodeByName = (name) => {
    var start, end;
    for (var i = 0; i < name.length; i++) {
      const ch = name.charAt(i);
      if (ch === "[") start = i;
      if (ch === "]") end = i;
    }
    const index = parseInt(name.slice(start + 1, end));
    return props.nodes[index];
  };

  const handleNodeChange = (e) => {
    const i = parseInt(e.target.id.slice(14));
    const nodeSelected =
      e.target.value === "Choose..." ? {} : findNodeByName(e.target.value);
    const newData = {
      date: trajData[i]["date"],
      node: nodeSelected,
    };
    trajData[i] = newData;
  };

  const validateData = () => {
    const validDate = false;
    const validNode = false;
    // validate date and node
    // TO-DO
    !validDate && alert("invalid date!");
    !validNode && alert("invalid node!");
    return validDate && validNode;
  };

  const handleSubmit = () => {
    if (validateData()) {
      props.setPatientsTrajectory(trajData);
      setToggleView(true);
    }
  };

  for (var i = 0; i < 14; i++) {
    trajView.push(
      <Form.Row key={i}>
        <Form.Group as={Col} controlId={"trajectoryDate" + i.toString()}>
          <Form.Label>{i === 0 ? "Date" : ""}</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter visiting date"
            onChange={(e) => handleDateChange(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId={"trajectoryNode" + i.toString()}>
          <Form.Label>{i === 0 ? "Place visited" : ""}</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            onChange={(e) => handleNodeChange(e)}
          >
            <option key="default">Choose...</option>
            {props.nodes.map((node, index) => (
              <option key={index}>
                {node.station_name + " [" + index.toString() + "]"}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>
    );
  }

  return toggleView ? (
    <p>The Patient's Trajectory Submitted!</p>
  ) : (
    <Form>
      <h5>Patient's Trajectory</h5>
      <br />
      {trajView}
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default PatientsTrajectory;

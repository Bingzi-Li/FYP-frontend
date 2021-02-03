import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SearchTermsForm = (props) => {
  let parameters = {
    startDate: {},
    endDate: {},
    entryToDisplay: 0,
  };

  const validateSearchTerms = () => {
    let valid = true;
    // validate
    // TO-DO
    if (parameters["startDate"] > parameters["endDate"]) {
      valid = false;
      alert("Please make sure start date is prior to end date.");
    }
    return valid;
  };

  const handleSearch = () => {
    if (validateSearchTerms()) {
      props.onSearch(parameters);
    }
  };

  return (
    <div>
      <p>Enter search parameters:</p>

      <Form.Row key="timeRange">
        <Form.Group as={Col} controlId="startDate">
          <Form.Label>from date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter visiting date"
            onChange={(e) => {
              parameters["startDate"] = Date.parse(e.target.value);
              //console.log(parameters);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="endDate">
          <Form.Label>to date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter visiting date"
            onChange={(e) => {
              parameters["endDate"] = Date.parse(e.target.value);
            }}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row key="entryToDisplay">
        <Form.Group as={Col} controlId="entryToDisplay">
          <Form.Label>entry to display</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number of search results to display"
            onChange={(e) => {
              parameters["entryToDisplay"] = e.target.value;
            }}
          />
        </Form.Group>
        <Form.Group as={Col}></Form.Group>
      </Form.Row>

      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchTermsForm;

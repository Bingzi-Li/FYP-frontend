import React from "react";
import Table from "react-bootstrap/Table";

const ResultView = (props) => {
  return (
    <div>
      <h5>Search Result</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {props.searchResult.map((each) => (
            <tr>
              <td>{each.id}</td>
              <td>{each.name}</td>
              <td>{each.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ResultView;

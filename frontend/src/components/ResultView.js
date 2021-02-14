import React from "react";
import Table from "react-bootstrap/Table";

const ResultView = (props) => {
  return (
    <div>
      <h5>Search Result</h5>
      <Table striped bordered hover>
        <thead>
          <tr key='thead'> 
            <th key='NRIC'>NRIC</th>
            <th key='dist'>Disimilarity</th>
          </tr>
        </thead>
        <tbody>
          {props.searchResult.map((each) => (
            <tr key={each[0]}>
              <td key='0'>{each[0]}</td>
              <td key='1'>{each[1]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ResultView;

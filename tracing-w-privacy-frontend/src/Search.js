import React from "react";
import Spinner from "react-bootstrap/Spinner";
import SearchTermsForm from "./components/SearchTermsForm";
import PatientsTrajectory from "./components/PatientsTrajectory";
import ResultView from "./components/ResultView";

const Search = (props) => {
  switch (props.searchViewOption) {
    case 0:
      return (
        <div>
          <div className="Body-outer">
            <div className="Body-inner">
              <PatientsTrajectory
                nodes={props.nodes}
                setPatientsTrajectory={props.onSubmitTraj}
              ></PatientsTrajectory>
            </div>
          </div>
          <div className="Body-inner">
            <h5>Search Terms</h5>
            <br />
            <SearchTermsForm onSearch={props.onSearch}></SearchTermsForm>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <div className="Body-outer">
            <div className="Body-inner">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <div className="Body-outer">
            <div className="Body-inner">
              <ResultView searchResult={props.searchResult}></ResultView>
            </div>
          </div>
        </div>
      );
  }
};

export default Search;

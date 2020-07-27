import React from "react";
import SearchTermsForm from "./components/SearchTermsForm";
import PatientsTrajectory from "./components/PatientsTrajectory";

const Search = (props) => {
  return (
    <div>
      <div className="Body-outer">
        <div className="Body-inner">
          <PatientsTrajectory
            nodes={props.nodes}
            onSubmitTraj={props.onSubmitTraj}
          ></PatientsTrajectory>
        </div>
      </div>
      <div className="Body-inner">
        <h5>Search Terms</h5>
        <br />
        <SearchTermsForm></SearchTermsForm>
      </div>
    </div>
  );
};

export default Search;

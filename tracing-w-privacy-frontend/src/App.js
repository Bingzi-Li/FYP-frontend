import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./Home";
import Search from "./Search";
import NoMatch from "./NoMatch";

function App() {
  /* ---------------- delcare states variables  ---------------- */

  // dummy data, should get it from backend
  const mrtData = [
    {
      station_name: "Jurong East",
      type: "MRT",
      lat: 1.333207,
      lng: 103.742308,
    },
    {
      station_name: "Bukit Batok",
      type: "MRT",
      lat: 1.349069,
      lng: 103.749596,
    },
    {
      station_name: "Bukit Gombak",
      type: "MRT",
      lat: 1.359043,
      lng: 103.751863,
    },
    {
      station_name: "Choa Chu Kang",
      type: "MRT",
      lat: 1.385417,
      lng: 103.744316,
    },
    {
      station_name: "Yew Tee",
      type: "MRT",
      lat: 1.397383,
      lng: 103.747523,
    },
    {
      station_name: "Kranji",
      type: "MRT",
      lat: 1.425302,
      lng: 103.762049,
    },
    {
      station_name: "Marsiling",
      type: "MRT",
      lat: 1.432579,
      lng: 103.77415,
    },
    {
      station_name: "Woodlands",
      type: "MRT",
      lat: 1.436984,
      lng: 103.786406,
    },
  ];

  var date = new Date();
  const initialSearchTerms = {
    startDate: new Date(date.getTime() - 14 * 86400000),
    endDate: date,
    entryToDisplay: 50,
  };

  const [nodes, setNodes] = useState(mrtData);
  const [searchTerms, setSearchTerms] = useState(initialSearchTerms);
  const [patientTrajectory, setPatientsTrajectory] = useState([]);

  /* <p>{nodes[0].station_name}</p>
      <p>{initialSearchTerms.startDate.toDateString()}</p>
      <p>{initialSearchTerms.endDate.toDateString()}</p>
      <p>{initialSearchTerms.entryToDisplay}</p> */

  /* ---------------- functions  ---------------- */

  function extractNodes() {
    // get nodes from backend
  }

  /* ---------------- body  ---------------- */

  /* ---------------- renderer  ---------------- */
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" render={() => <Home nodes={nodes} />} />
          <Route
            path="/search"
            render={() => (
              <Search nodes={nodes} onSubmitTraj={setPatientsTrajectory} />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

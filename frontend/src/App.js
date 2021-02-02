import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./Home";
import Search from "./Search";
import Login from "./Login";
import Logout from "./Logout";
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

  // 0: the search terms UI
  // 1: the loading UI
  // 2: the result UI
  const [searchViewOption, setSearchViewOption] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [searchResult, setSearchResult] = useState([]);

  /* ---------------- functions  ---------------- */

  function extractNodes() {
    // TODO: get nodes from backend
    fetch('/nodes/all')
        .then(response => response.json())
        .then(data => {
          // TODO: process this data
          setNodes(data);
        });
  }

  // for testing only
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSearch = async (parameters) => {
    setSearchTerms(parameters);

    // before result returned by backend, set search view option to 1
    setSearchViewOption(1);
    await delay(5000); // for testing purpose

    // TODO: send params to backend, call backend to search
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({parameters})
  };
  fetch('/search', requestOptions)
      .then(response => response.json())
      .then(data => {
        // TODO: put the data into right format
        // setSearchResult(data);
      });
    
    // dummy data when todo is not ready
    const result = [
      { id: 0, name: "Jack Sparrow", contact: 12345678 },
      { id: 1, name: "Harry Potter", contact: 12345668 },
      { id: 2, name: "Arya Stark", contact: 12341248 },
    ];
    setSearchResult(result);

    // after result returned by backend, set search view option to 2
    setSearchViewOption(2);
  };

  /* ---------------- body  ---------------- */

  /* ---------------- renderer  ---------------- */
  return (
    <React.Fragment>
      <Router>
        <NavigationBar isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path="/" render={() => <Home nodes={nodes} />} />
          <PrivateRoute
            isLoggedIn={isLoggedIn}
            path="/search"
            render={() => (
              <Search
                nodes={nodes}
                searchResult={searchResult}
                searchViewOption={searchViewOption}
                setPatientsTrajectory={setPatientsTrajectory}
                onSearch={handleSearch}
              />
            )}
          />

          <Route
            path="/login"
            render={() => (
              <Login
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              ></Login>
            )}
          ></Route>
          <Route
            path="/logout"
            render={() => (
              <Logout
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              ></Logout>
            )}
          ></Route>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

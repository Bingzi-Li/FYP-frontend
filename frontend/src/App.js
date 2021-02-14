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

  // if we need to display nodes on the screen
  const mrtData = [];

  // var date = new Date();
  // const initialSearchTerms = {
  //   startDate: new Date(date.getTime() - 14 * 86400000),
  //   endDate: date,
  //   entryToDisplay: 5,
  // };

  const [nodes, setNodes] = useState(mrtData);

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
  // const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  
  const handleSearch = async (parameters) => {

    // before result returned by backend, set search view option to 1
    setSearchViewOption(1);
   // await delay(1000); // for testing purpose
  

    // end params to backend, call backend to search
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'searchTerms': parameters})
  };
  fetch('/search', requestOptions)
      .then(response => response.json())
      .then(data => {
         console.log(data);
         setSearchResult(data['res']);
        
      // after result returned by backend, set search view option to 2
      setSearchViewOption(2);

      });
  
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

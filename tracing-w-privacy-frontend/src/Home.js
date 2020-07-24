import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Map nodes={props.nodes} />
    </div>
  );
};

export default Home;

import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Body nodes={props.nodes} />
    </div>
  );
};

export default Home;

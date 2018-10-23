import React from "react";
import Navbar from "../Navbar";
import Artists from "../Artists";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h4 className="center">Home</h4>
        <p>this is home page</p>
        <div className="row">
          <Artists />
        </div>
      </div>
    </div>
  );
};

export default Home;

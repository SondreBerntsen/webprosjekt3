import React from "react";
import Artists from "./Artists";

const Home = () => {
  return (
    <div>
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

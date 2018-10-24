import React from "react";
import Navbar from "../Navbar";
import EventList from "../EventList";
import HomeSchedule from "./HomeSchedule";
import "../../styles/home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h4 className="center">Home</h4>
        <p>this is home page</p>
        <div className="row">
          <div className="col-3"><HomeSchedule /></div>
          <div className="col-9"><div className="row"><EventList /></div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

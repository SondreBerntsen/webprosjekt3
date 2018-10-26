//Home page

import React from "react";
import Navbar from "../Navbar";
import EventList from "../EventList";
import HomeSchedule from "./HomeSchedule";
import NewsCards from "../NewsCards";
import "../../styles/home.css";

const HomeFail = () => {
  return (
    <div>
      <div className="headerImgDiv"></div>
      <Navbar />
      <div className="container">
        <div className="shortHomeTxt col-md-8">
          <p>Drammen Sacred Music Festival bygger broer gjennom kulturopplevelser, hvor lokale, nasjonale og internasjonale aktører fyller programmet med kunst og musikk.</p>
          <p className="shortHomeTxtLast">&#x0266A; &#9835; Bli med og la deg berøre! &#x0266A; &#9835;</p>
        </div>
        <div className="row">
          <div className="col-md-3"><HomeSchedule /></div>
          <div className="col-md-9"><div className="row"><EventList /></div></div>
        </div>

      </div>
      <div className="newsSection">
        <div className="container">
          <h2 className="newsTitle">Nyheter</h2>
          <div className="row"><NewsCards /></div>
        </div>
      </div>
    </div>
  );
};

export default HomeFail;

import React from "react";
import Navbar from "../Navbar";
import NewsCards from "../NewsCards";

const News = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="newsSection">
          <div className="container">
            <h2 className="newsTitle">Nyheter</h2>
            <div className="row"><NewsCards /></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default News;

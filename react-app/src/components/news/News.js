import React from "react";
import Navbar from "../Navbar";
import NewsCards from "../NewsCards";
import "../../styles/news.css";
const News = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="newsSection">
          <div className="container mx-auto ">
            <h2 className="newsTitle">Nyheter</h2>
            <div className="row "><NewsCards /></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default News;

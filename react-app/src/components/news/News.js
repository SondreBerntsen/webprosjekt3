import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import NewsCards from "../NewsCards";
import "../../styles/news.css";
const News = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="newsSection">
          <div className="container mx-auto ">
            <h2 className="pageTitle">Nyheter</h2><hr className="hrHeight" />
            <div className="row "><NewsCards /></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default News;

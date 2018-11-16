import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import NewsCards from "../NewsCards";
import { Link } from 'react-router-dom';
import "../../styles/news.css";
class News extends Component {
  state = {
    years: []
  }
  componentDidMount() {
    this.getYearList();
  }
  getYearList = _ => {
    console.log('hallo news')
    fetch(`http://localhost:5000/newsYearList`)
      .then(response => response.json())
      .then(response => this.setState({ years: response }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="newsSection">
            <div className="container mx-auto ">
              <h2 className="pageTitle">Nyheter</h2>
              <hr className="hrHeight" />
              <div className="newsYearLinks">
                {this.state.years.map(function (year) {
                  return (
                    <Link className="btn newsYearLink" to={'/nyheter/' + year.year} key={year.year}>{year.year}</Link>
                  );
                })}
              </div>
              <div className="row "><NewsCards /></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default News;

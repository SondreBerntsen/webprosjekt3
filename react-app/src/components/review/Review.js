import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EventList from "../EventList";
import Slider from "./Slider";
import "../../styles/review.css";

class Review extends Component {
  state = {
    year: "",
    reviewData: {
      text: ""
    },
    recordings: [],
    slides: []
  };
  componentDidMount() {
    this.getData();
  }

static getDerivedStateFromProps(nextProps, prevState){
  if(nextProps.match.params.reviewId !== prevState.year){
    console.log("hello BOISSSSS")
    return {year: nextProps.match.params.reviewId};
  }
  else return null;
}

  getData = _ => {
    let year = this.props.match.params.reviewId;
    fetch(`http://localhost:5000/review?year=` + year)
      .then(response => response.json())
      .then(response => {
        let data = {};
        data.year = year;
        data.reviewData = response.data.reviewData[0];
        data.slides = response.data.slides;
        data.recordings = response.data.recordings;
        this.setState(data);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Slider slides={this.state.slides} />
          <div className="row">
            <div className="col-lg">
              <h1 className="yearHeading">{this.state.year}</h1>
            </div>
          </div>
          {/*  fix We have to regex body output to add paragraphs/headers if we don't do add html tags during input */}
          <article>{this.state.reviewData.text}</article>
          <div className="container">
            <div className="row">
              {this.state.year !== "" ? (
                <EventList year={this.state.year} />
              ) : null}
            </div>
            <div className="row">
              <div className="col-lg">
                <h3 className="recordingsTitle">Tidligere liveopptak</h3>
              </div>
            </div>
            <div className="list-group">
              {this.state.recordings.map(link => (
                <React.Fragment key={link.id}>
                  <a href={link.link} className="list-group-item list-group-item-action" role="button">{link.name}</a>
                </React.Fragment>

              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Review;

import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EventList from "../EventList";
import Slider from "./Slider";
import "../../styles/review.css";

class Review extends Component {
  state = {
    year: '',
    reviewData: {
      text: ''
    },
    recordings: [],
    slides: []
  };
  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(){
    this.getData()
    this.setState(this.state)
  }
  
  getData = _ => {
    let year = this.props.match.params.reviewId;
    fetch(`http://localhost:5000/review?year=` + year)
      .then(response => response.json())
      .then(response => {
        let data = {}
        data.year = year
        data.reviewData = response.data.reviewData[0]
        data.slides = response.data.slides
        data.recordings = response.data.recordings
        this.setState(data)
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Slider slides={this.state.slides} />
          <h1 className="yearHeading">{this.state.year}</h1>
          {/*  fix We have to regex body output to add paragraphs/headers if we don't do add html tags during input */}
          <article>{this.state.reviewData.text}</article>
          <div className="container">
            <div className="row">
              {this.state.year != '' ? <EventList year={this.state.year} /> : null}
            </div>
            <h3 className="recordingsTitle">Tidligere liveopptak</h3>
            <div id="recordingsList">
              {this.state.recordings.map(link => (
                <React.Fragment key={link.id}>
                  <h5>{link.name}</h5>
                  <a href={link.link} className="pTagRecordings">{link.link}</a>
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
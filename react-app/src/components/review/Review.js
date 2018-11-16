import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EventList from "../EventList";
import Slider from "./Slider";
import "../../styles/review.css";

class Review extends Component {
  state = {
    year: '',
    reviewData: [{ id: "", year: "", text: "" }],
    slides: [
      {
        id: 1,
        img:
          "https://i.imgur.com/5iA7eFe.png",
        title: "Violin Grill, sitting on a bench.",
        caption:
          "This cat is so hung it's hard for him to even prowl along the hardwood floors because them planks have splinters"
      },
      {
        id: 2,
        img:
          "https://i.imgur.com/bUMoAu6.png",
        title: "B.A.M.F. playing some Ukulele",
        caption: "Bitch gettin' told"
      },
      {
        id: 3,
        img:
          "https://i.imgur.com/zcLcbPK.png",
        title: "Generic ass concert dude man",
        caption: "Bitch gettin' told"
      }
    ],
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet arcu eu erat pretium ullamcorper et eu mauris. Etiam a ante eros. Maecenas interdum mi aliquam leo malesuada vulputate. Integer eleifend erat in ligula pharetra euismod. Duis purus dolor, pretium eget feugiat eu, tempus id mi. Pellentesque ut ultrices orci. Sed quis rutrum metus. Suspendisse potenti. Praesent ac sapien sed tortor feugiat tempor. Vivamus ac orci vel felis pulvinar imperdiet. Etiam laoreet felis nibh, non semper metus rhoncus non. Quisque lobortis molestie dolor, fringilla maximus ligula dapibus in.",
    recordings: [
      {
        id: 1,
        title: "Mongy Dickins",
        link: "https://i.imgur.com/OGRdkCu.mp4"
      },
      {
        id: 2,
        title: "Top Mongol",
        link: "https://i.imgur.com/OGRdkCu.mp4"
      },
      {
        id: 3,
        title: "Mongrel Mountaineers",
        link: "https://i.imgur.com/OGRdkCu.mp4"
      }
    ]
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
        data.reviewData = response.data.reviewData
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
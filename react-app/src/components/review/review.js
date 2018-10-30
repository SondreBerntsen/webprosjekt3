import React, { Component } from "react";
import Navbar from "../Navbar";
import EventList from "../EventList";
import Slider from "./Slider";

class Review extends Component {
  state = {
    year: "2018",
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
        link: "youtube link i guess"
      },
      {
        id: 2,
        title: "Top Mongol",
        link: "youtube link i guess"
      },
      {
        id: 3,
        title: "Mongrel Mountaineers",
        link: "youtube link i guess"
      }
    ]
  };
  /*
  e skjønnå ikkje den heå, men tok den fra Event.js siden vi sikkert trenger noe liknende her

  componentDidMount() {
    let year = this.props.match.params.watwatwat;
    this.setState({
        year: year
    })
  }
*/
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h4 className="center">Archive</h4>
          <Slider slides={this.state.slides} />
          <h1>{this.state.year}</h1>
          {/* We have to regex body output to add paragraphs/headers if we don't do add html tags during input */}
          <article>{this.state.body}</article>
          <div className="container">
            <EventList />
            <div id="recordingsList">
              {this.state.recordings.map(link => (
                <div key={link.id}>
                  <h3>{link.title}</h3>
                  <p>{link.link}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;

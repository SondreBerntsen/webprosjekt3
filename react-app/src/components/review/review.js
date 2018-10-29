import React, {Component} from "react";
import Navbar from "../Navbar";
import EventList from "../EventList";
import Slider from "./Slider";

class Review extends Component {
  state = { 
    year: "2018",
    slides: [
      {
        id: 1,
        img: "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
        title: "Big Dick Cat",
        caption: "This cat is so hung it's hard for him to even prowl along the hardwood floors because them planks have splinters"
      },
      {
        id: 2,
        img: "https://i.kinja-img.com/gawker-media/image/upload/s--nBFK8XCY--/c_scale,fl_progressive,q_80,w_800/zzpo5oucegaa7clwzvn6.jpg",
        title: "Asobi Balldown",
        caption: "Bitch gettin' told"
      }
    ],
    body: "There best be paragraph separations here. big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text big dick text ",
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
  }
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
              {
                this.state.recordings.map(link =>(
                  <div key={link.id}>
                    <h3>{link.title}</h3>
                    <p>{link.link}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Review;
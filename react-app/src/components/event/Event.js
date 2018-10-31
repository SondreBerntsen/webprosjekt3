//Event page
//mye fix her når database kommer
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MinEventCard from "../programme/MinEventCard";
import EventVideo from "./EventVideo";
import "../../styles/events.css";

class Event extends Component {
  state = {
    id: null,

    events: [
      {
        eventid: 1,
        title: "ViolinKveld med kattepusene",
        venue: "Scene 1",
        time: "20:00",
        price: "NOK 100,-"
      }
    ],

    event: {
      eventImg:
        "https://i.pinimg.com/originals/d4/c1/9d/d4c19ddddebb9f8f7e327a9754fc5c40.jpg",
      eventTitle: "ViolinKveld med kattepusene",
      eventDate: "Mandag 21.09.2018",
      eventTxt:
        "Her har Ragnhild en etterlengtet kveld med kattepusene, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      eventVideoURL: "Y2HJpa0FU88"
    }
  };
  componentDidMount() {
    let id = this.props.match.params.eventId;
    this.setState({
      id: id
    });
  }
  render() {
    //console.log(this.state.id);
    const event = this.state.event ? (
      <div className="container">
        <h2 className="event-title">{this.state.event.eventTitle}</h2>

        <p className="eventDate">{this.state.event.eventDate}</p>
        <hr className="event-hr" />

        <EventVideo
          url={this.state.event.eventVideoURL}
          title={this.state.event.eventTitle}
          placeholderImage={this.state.event.eventImg}
        />

        <MinEventCard key={this.state.id} event={this.state.events[0]} />

        <p className="event-text">{this.state.event.eventTxt}</p>
      </div>
    ) : (
      <div>Error melding her.. fix video 31</div>
    );
    return (
      <div>
        <Navbar />
        {event}
        <Footer />
      </div>
    );
  }
}

export default Event;

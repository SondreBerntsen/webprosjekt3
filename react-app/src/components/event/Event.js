//Event page
//mye fix her når database kommer
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScheduleItem from "../ScheduleItem";
import EventVideo from "./EventVideo";
import "../../styles/event.css";

class Event extends Component {
  state = {
    id: null,
    eventData: [{ id: '', title: '', text: '', img_path: '', date: '', youtube_link: '', payment_link: '', address: '' }],
    events: [
      {
        eventid: 1,
        title: "ViolinKveld med kattepusene",
        venue: "Scene 1",
        time: "20:00",
        price: "NOK 100,-",
        date: "27.09.2019"
      }
    ],

    event: {
      eventImg:
        "https://i.pinimg.com/originals/d4/c1/9d/d4c19ddddebb9f8f7e327a9754fc5c40.jpg",
      eventTitle: "ViolinKveld med kattepusene",
      eventDate: "Mandag 27.09.2019",
      eventTxt:
        "Her har Ragnhild en etterlengtet kveld med kattepusene, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      eventVideoURL: "Y2HJpa0FU88"
    }
  };
  componentDidMount() {
    let id = this.props.match.params.eventId;
    this.getEventData(id);
  }
  componentDidMount() {
    let id = this.props.match.params.eventId;
    this.getEventData(id);
    window.scrollTo(0, 0);
  }
  getEventData = (id) => {
    fetch(`http://localhost:5000/event?id=` + id)
      .then(response => response.json())
      .then(response => this.setState({ eventData: response }))
      .catch(err => console.log(err));
  };
  showScheduleItem() {
    let str = this.state.events[0].date;
    // splitting the date string
    let res = str.split(".");
    let d = res[0];
    let m = res[1];
    let y = res[2];
    /*  puts the date into a format that automatically converts 
        to the full date data. This makes it possible to easily 
        compare our givenDate to the currentDate 
          example: Fri Sep 27 2019 02:00:00 GMT+0200 
                   (sentraleuropeisk sommertid)  
    */
    let givenDate = y + "-" + m + "-" + d;
    let currentDate = new Date();
    givenDate = new Date(givenDate);
    // if the date of the event has passed or is today..
    if (givenDate > currentDate || givenDate === currentDate) {
      // ..we output the ScheduleItem component for the event.
      return <ScheduleItem key={this.state.id} event={this.state.eventData[0]} />;
    }
  }

  render() {
    const event = this.state.eventData[0] ? (
      <div className="container">
        <h2 className="event-title">{this.state.eventData[0].title}</h2>
        <p className="event-date">{this.state.eventData[0].date}</p>
        <hr className="event-hr" />
        {this.showScheduleItem()}
        <EventVideo
          url={this.state.event.eventVideoURL}
          title={this.state.event.eventTitle}
          placeholderImage={this.state.event.eventImg}
        />
        <p className="event-text">{this.state.eventData[0].text}</p>
      </div>
    ) : (
        <div class="errorDiv container">
          <h1 class="sadSmilyError">&#x2639;</h1>
          <h1 class="txt404">404</h1>
          <h3>Page not found</h3>
          <p>The page you are looking for doesn't exist or an other error occured.</p>
        </div>
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
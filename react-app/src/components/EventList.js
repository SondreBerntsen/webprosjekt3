import React, { Component } from "react";
import EventCard from "./EventCard.js";

class EventList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getEventList();
  }
  getEventList = _ => {
    let year = this.props.year;
    fetch(`http://localhost:5000/events?year=` + year)
      .then(response => response.json())
      .then(response => this.setState({ events: response.data }))
      .catch(err => console.log(err));
  };

  render() {
    return this.state.events.map(event => (
      < EventCard key={event.id} eventTitle={event.title} imgPath={event.img_path} eventId={event.id} />
    ));
  }
}

export default EventList;

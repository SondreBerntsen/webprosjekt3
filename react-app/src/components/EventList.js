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
    console.log({ year });
    fetch(`http://localhost:4000/events?year=` + year)
      .then(response => response.json())
      .then(response => this.setState({ events: response.data }))
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  };

  render() {
    return this.state.events.map(event => (
      < EventCard key={event.id} eventTitle={event.title} imgPath={event.thumbnail_path} eventId={event.id} />
    ));
  }
}

export default EventList;

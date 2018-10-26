import React, { Component } from "react";
import EventCard from "./EventCard.js";

class EventList extends Component {
  state = {
    artists: [
      {
        name: "Ryu",
        age: 30,
        img:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg",
        id: 1
      },
      {
        name: "Yoshi",
        age: 20,
        img:
          "https://www.drammensacred.no/wp-content/uploads/2018/09/untitled-11-of-15-960x720.jpg",
        id: 2
      },
      {
        name: "Crystal",
        age: 25,
        img:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg",
        id: 3
      },
      {
        name: "Elisabeth",
        age: 25,
        img:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg",
        id: 4
      },
      {
        name: "Sondre",
        age: 25,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6LcUex1muygzYyDtKuK6NhVnuqdqOhvHjMUyqdI969vnNSc1zg",
        id: 5
      },
      {
        name: "Mads",
        age: 25,
        img:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg",
        id: 6
      },
      {
        name: "Elisa",
        age: 25,
        img:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Sanskriti_Shrestha_Eastern_Daze_III_07.jpg",
        id: 7
      },
      {
        name: "Blah",
        age: 25,
        img:
          "http://attic.no/wp-content/uploads/2015/06/Hip-hop-gruppe-Herman-foran.jpg",
        id: 8
      },
      {
        name: "Bleh",
        age: 25,
        img:
          "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
        id: 9
      }
    ]
  };
  render() {
    return this.state.artists.map(artist => (
      <EventCard key={artist.id} artistName={artist.name} artistImg={artist.img} artistId={artist.id} />
    ));
  }
}

export default EventList;

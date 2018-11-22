import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ListOfDays from "./ListOfDays";
import ProgrammeSchedule from "./ProgrammeSchedule";
import "../../styles/programme.css";
import {fixDateString, fixTimeString} from '../Functions'

class Programme extends Component {
  state = {
    days: []
  };

  componentDidMount() {
    let date = new Date();
    let year = date.getFullYear(); //use this instead of hardcoding year value in express file somehow
    this.getJson(year);
  }

  getJson = year=> {
    fetch('http://localhost:5000/programme?year=' + year)
    .then(response => response.json())
    .then((response) => {
      this.mapDays(response);
    })
    .catch(err => {
      throw err;
    });
  };

  mapDays = json => {
    let days = [];

    for (let i = 0; i < json.length; i++) {
      //Populates event with values from json object
      let event = {};
      event.id = json[i].id;
      event.title = json[i].title;
      event.venue = json[i].address;
      event.payment_link = json[i].payment_link;
      event.time = fixTimeString(json[i].time); //Calls fixTimeString function and stores return value
      event.price = json[i].price;

      let eventDate = json[i].date; //Calls fixDateString function and stores return value

      //Check if date in json object already exists in days array
      let dateExists = false;
      for (let j = 0; j < days.length; j++) {
        if (eventDate === days[j].date) {
          // If date matches existing date
          //shove object with event data into that date's event array
          days[j].events.push(event);
          dateExists = true;
          break;
        }
      }
      if (dateExists === false) {
        //If date does not exist in dates array
        //create date object and push it into days array
        let date = {};
        date.date = eventDate;

        // Returns the date's day, e.g. "Tirsdag" (see functions.js)
        let weekDay = fixDateString(eventDate)
      
        date.day = weekDay;
        date.events = [event];
        days.push(date);
      }
    }
    this.setState({ days: days });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="vh-85">
            <h2 className="center pageTitle">Program</h2>
            <hr className="hrHeight" />
            <ListOfDays days={this.state.days} />
            {/* Passes days array as props to ProgrammeSchedule */}
            <ProgrammeSchedule days={this.state.days} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Programme;

import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ListOfDays from "./ListOfDays";
import ProgrammeSchedule from "./ProgrammeSchedule";
import "../../styles/programme.css";

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
    let body = {year: year}
    fetch('http://localhost:5000/programme', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
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
      event.time = this.fixTimeString(json[i].time); //Calls fixTimeString function and stores return value
      event.price = json[i].price;

      let eventDate = this.fixDateString(json[i].date); //Calls fixDateString function and stores return value

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
        let weekDay = new Date(json[i].date).getDay(); //Creates a numeric value representing the week day of that date

        //Sets weekDay to a string value based on its numeric value
        switch (weekDay) {
          case 0:
            weekDay = "Søndag";
            break;
          case 1:
            weekDay = "Mandag";
            break;
          case 2:
            weekDay = "Tirsdag";
            break;
          case 3:
            weekDay = "Onsdag";
            break;
          case 4:
            weekDay = "Torsdag";
            break;
          case 5:
            weekDay = "Fredag";
            break;
          case 6:
            weekDay = "Lørdag";
            break;
          default:
            weekDay = "";
        }
        date.day = weekDay;
        date.events = [event];
        days.push(date);
      }
    }
    this.setState({ days: days });
  };

  //Gets default MySQL date value and converts it to Norwegian standard day/month structure
  fixDateString = string => {
    let match = string.match(/\d{4}-(\d{2})-(\d{2})/);
    let returnString = match[2] + "/" + match[1];
    return returnString;
  };
  //Gets default MySQL time value and converts it to "minutes:seconds" only
  fixTimeString = string => {
    let match = string.match(/(\d{2}:\d{2}):/);
    let returnString = match[1];
    return returnString;
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

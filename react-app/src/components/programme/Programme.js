import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ListOfDays from "./ListOfDays";
import ProgrammeSchedule from "./ProgrammeSchedule";
import "../../styles/programme.css";
class Programme extends Component {
  //Temporary state while we figure out what to do with redux
  state = {
    days: [
      {
        id: 1,
        date: 21.09,
        day: "Mandag",
        events: [
          {
            id: 1,
            title: "Ronny og Ronny",
            venue: "Scene 1",
            time: "20:00",
            price: "NOK 100,-"
          },
          {
            id: 2,
            title: "Den andre artisten",
            venue: "Hjemme hos Mads",
            time: "21:00",
            price: 0
          },
          {
            id: 3,
            title: "Den personen som var kul",
            venue: "Kulgaten 2a",
            time: "21:00",
            price: "NOK 230,-"
          }
        ]
      },
      {
        id: 2,
        date: 21.09,
        day: "Tirsdag",
        events: [
          {
            id: 1,
            title: "Ronny og Ronny",
            venue: "Scene 1",
            time: "20:00",
            price: "NOK 100,-"
          },
          {
            id: 2,
            title: "Den andre artisten",
            venue: "Hjemme hos Mads",
            time: "21:00",
            price: 0
          },
          {
            id: 3,
            title: "Den personen som var kul",
            venue: "Kulgaten 2a",
            time: "21:00",
            price: "NOK 230,-"
          }
        ]
      }
    ]
  };
  
  componentDidMount() {
    let date = new Date();
    let year = date.getFullYear()
    //let self = this
    this.getJson()
  }

  getJson = () => {
    fetch('http://localhost:5000/programme')
      .then(response => response.json())
      .then(({data}) => {
        this.structureJson(data)
      })
      .catch(err => {
        throw(err)
      })
  }
  structureJson = (json) => {
    console.log(json)
    let days = []

    for(let i = 0; i < json.length; i++){
    
      //Populates event with values from json object
      let event = {}
      event.id = json[i].id
      event.title = json[i].title
      event.venue = json[i].address
      event.time = json[i].time 
      event.price = json[i].price

      //Check if date in json object already exists in days array
      let dateExists = false
      for(let j = 0; j < days.length; j++){
        if(json[i].date === days[j].date){ // If date matches existing date
          //shove object with event data into that date's event array
          days[j].events.push(event)
          dateExists = true
          break;
        }
      }
      if(dateExists === false){ //If date does not exist in dates array
        //create date object and push it into days array
        let date = {}
        date.date = json[i].date
        date.day = new Date(json[i].date).getDay() //figure out later
        date.events = [event]
        days.push(date)
        date = {}
      }
    }
    console.log(days)
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="center pageTitle">Program</h2>
          <hr className="hrHeight" />
          <ListOfDays days={this.state.days} />
          {/* Passes days array as props to ProgrammeSchedule */}
          <ProgrammeSchedule days={this.state.days} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Programme;

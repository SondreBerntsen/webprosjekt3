import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ListOfDays from "./ListOfDays";
import ProgrammeSchedule from "./ProgrammeSchedule";
import "../../styles/programme.css";
class Programme extends Component {
 state = {
    days: []
 }

  componentDidMount() {
    let date = new Date();
    let year = date.getFullYear() //use this instead of hardcoding year value in express file somehow
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
        date.date = json[i].date // regex this
        let weekDay = new Date(json[i].date).getDay() //Creates a numeric value representing the week day of that date

        //Sets weekDay to a string value based on its numeric value
        switch(weekDay) {
          case 0: 
            weekDay = 'Søndag'
            break
          case 1: 
            weekDay = 'Mandag'
            break
          case 2: 
            weekDay = 'Tirsdag'
            break
          case 3: 
            weekDay = 'Onsdag'
            break
          case 4: 
            weekDay = 'Torsdag'
            break
          case 5: 
            weekDay = 'Fredag'
            break
          case 6:
            weekDay = 'Lørdag'
        }
        date.day = weekDay
        date.events = [event]
        days.push(date)
      }
    }
    this.setState({days: days})
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

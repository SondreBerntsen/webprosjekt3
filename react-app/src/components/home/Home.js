import React, {Component} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EventList from "../EventList";
import "../../styles/home.css";
import { Link } from "react-router-dom";

class Home extends Component{
  state = {
    year: '',
    content: {}
  }

  componentDidMount = () => {
    this.getData()
  }
  getData = () => {
    fetch("http://localhost:5000/home")
      .then(response => response.json())
      .then(response => {
        this.checkStatus(response.data[0])
      })
      .catch(err => console.log(err));
  }
  checkStatus = (data) => {
    let content = {}
    //content for no anniversary
    content.anniversary = (data.anniversary === "on" ? true : false)
    if(data.status === "active"){
      content.pitch = data.pitch
      content.date = data.dateHeader_txt
    }
    else{
      content.pitch = data.pitch
      content.inactive = data.inactiveHeader_txt
    }
    let date = new Date();
    let year = date.getFullYear();
    this.setState({year: year, content: content})
    console.log(this.state)
  }

  render(){
    return (
      <React.Fragment>
          <Navbar />
          <div className="headerImage">
              <div className="container-fluid contentHeader  col-12 col-sm-10 col-lg-8 col-md-8 col-xl-6 ">
                  <img className="logoImg  col-8 col-sm-6 col-md-6 col-lg-6 col-xl-5" src={require('../../img/logo.png')} alt="logo" />
                  {/* <p className="headerText">Drammen Sacred Music Festival bygger broer gjennom kulturopplevelser, hvor lokale, nasjonale og internasjonale aktører fyller programmet med kunst og musikk. Bli med og la deg berøre!</p>*/}
                  <p className="dateHeader">{this.state.content.date}</p>
                  <div className="row col-md-8 btnHeaderDiv">
                      <Link to="/program" className="btnHeader btn col-sm-12 col-md-10 col-lg-5">Program</Link>
                      <a href="#eventsHome" className="btnHeader btn col-sm-12 col-md-10 col-lg-5">Lineup</a>
                  </div>
              </div>
              <div className="container mx-auto" id="eventsHome">
                  <div className="row "><EventList year={this.state.year} /></div>
              </div>
          </div>
          <Footer />
      </React.Fragment>

    )
  }
}

export default Home;
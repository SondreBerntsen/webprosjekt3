import React from "react";
import Navbar from "../Navbar";
import EventList from "../EventList";
import "../../styles/home.css";

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="headerImage">
                <div className="container-fluid contentHeader  col-12 col-sm-10 col-lg-8 col-md-8 col-xl-6 ">
                    <img className="logoImg  col-8 col-sm-6 col-md-6 col-lg-6 col-xl-5" src={require('../../img/logo.png')} />

                    <p className="dateHeader">15. – 23. September</p>
                    <div className="row col-md-8 btnHeaderDiv">
                        <a href="/program" className="btnHeader btn col-sm-12 col-md-10 col-lg-5">Program</a>
                        <a href="#eventsHome" className="btnHeader btn col-sm-12 col-md-10 col-lg-5">Lineup</a>
                    </div>
                </div>
                <div className="container mx-auto" id="eventsHome">
                    <div className="row "><EventList /></div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Home;
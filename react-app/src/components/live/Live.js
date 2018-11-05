//Live component
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/live.css";

class Live extends Component {

    /*
    
    LIVE VIDEO

    LIVE FEED
    
    LISTE OVER PLANLAGTE LIVE STREAMS
    
    */


    render() {
        return (
            <div>
                <Navbar />
                <p>LIVE</p>
                <Footer />
            </div>
        );
    }
}

export default Live;

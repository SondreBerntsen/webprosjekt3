//Live component
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/live.css";

class Live extends Component {


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

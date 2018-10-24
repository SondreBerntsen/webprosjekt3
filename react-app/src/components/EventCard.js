import React, { Component } from "react";

class EventCard extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <a href="arrangement/1">
          <div
            onMouseOver={this.mouseOverImg.bind(this)}
            onMouseOut={this.mouseOutImg.bind(this)}
            className="artistDiv "
          >
            <img
              className="thumbArtist"
              src={this.props.artistImg}
              alt="artist"
            />
            <div className="overlay"></div>
            <div id={this.props.artistName}>
              <p className="shortDescr"></p>
              <h4 className="artistName" >
                {this.props.artistName}
              </h4>
            </div>
          </div>
        </a>
      </div >
    );
  }
  mouseOverImg() {
    const id = this.props.artistName;//fix denne må endres til artisId 
    document.getElementById(id).firstChild.innerHTML = "Bli med på en konsert du aldri har sett makan til";
    document.getElementById(id).firstChild.nextSibling.innerHTML = "";
    document.getElementById(id).previousSibling.style.backgroundColor = "black";
    //document.getElementById('bla').classList.remove("overlay");
  }
  mouseOutImg() {
    const id = this.props.artistName;
    document.getElementById(id).firstChild.innerHTML = "";
    document.getElementById(id).firstChild.nextSibling.innerHTML = id;
    document.getElementById(id).previousSibling.style.backgroundColor = "";
  }
}

export default EventCard;

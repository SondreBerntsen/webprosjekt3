import React, { Component } from "react";

class Artist extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div
          onMouseOver={this.changeText.bind(this)}
          onMouseOut={this.changeTextBack.bind(this)}
          className="artistDiv "
        >
          <img
            className="thumbArtist"
            src={this.props.artistImg}
            alt="artist"
          />
          <h4 className="artistName" id={this.props.artistName}>
            {this.props.artistName}
          </h4>
        </div>
      </div>
    );
  }
  changeText() {
    console.log(this.props.artistName);
    const id = this.props.artistName;
    console.log(id);
    document.getElementById(id).innerHTML = "Ny tekst skal her";
  }
  changeTextBack() {
    const id = this.props.artistName;
    document.getElementById(id).innerHTML = id;
  }
}

export default Artist;

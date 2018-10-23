import React, { Component } from "react";
import Artist from "./Artist.js";

class Artists extends Component {
  state = {
    artists: [
      {
        name: "Ryu",
        age: 30,
        img:
          "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
        id: 1
      },
      {
        name: "Yoshi",
        age: 20,
        img:
          "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
        id: 2
      },
      {
        name: "Crystal",
        age: 25,
        img:
          "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
        id: 3
      }
    ]
  };
  render() {
    return this.state.artists.map(artist => (
      <Artist key={artist.id} artistName={artist.name} artistImg={artist.img} />
    ));
  }
}

export default Artists;

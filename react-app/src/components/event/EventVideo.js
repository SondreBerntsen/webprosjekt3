//EventVideo page

//https://www.npmjs.com/package/react-youtube
import React, { Component } from "react";
import YouTube from "react-youtube";

class EventVideo extends Component {
  render() {
    const url = this.props.url;
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return <YouTube videoId={url} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo(); //playVideo
  }
}

export default EventVideo;

//Live component
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/live.css";
//import YouTube from "react-youtube";
//const YoutubeLive = require("youtube-live-react");

class Live extends Component {
  /*
    
    LIVE VIDEO

    LIVE FEED
    
    LISTE OVER PLANLAGTE LIVE STREAMS

    key=AIzaSyDgh0qAGY0pn7fOQ3TnJW0XHeKtLjNcRHU

    const url= "https://www.googleapis.com/youtube/v3/liveStreams?part=id&key=AIzaSyDgh0qAGY0pn7fOQ3TnJW0XHeKtLjNcRHU";
    
    */
  componentDidMount() {
    /* fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLA_DiR1FfKNvjuUpBHmylQ&eventType=live&type=video&key=AIzaSyDgh0qAGY0pn7fOQ3TnJW0XHeKtLjNcRHU&enablejsapi=1&origin=http://localhost:3000`
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson && responseJson.items[0])
          this.setState({
            videoId: responseJson.items[0].id.videoId
          });
      })
      .catch(error => {
        console.error(error);
      });*/
  }

  render() {
    /*const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLA_DiR1FfKNvjuUpBHmylQ&eventType=live&type=video&key=AIzaSyDgh0qAGY0pn7fOQ3TnJW0XHeKtLjNcRHU`;*/

    /*  const youtube = (
        <YoutubeLive
          iframeWidth={400}
          iframeHeight={200}
          maxResults={2}
          youtubeChannelId="UCLA_DiR1FfKNvjuUpBHmylQ"
          googleApiKey="AIzaSyDgh0qAGY0pn7fOQ3TnJW0XHeKtLjNcRHU"
        />
      );
      console.log(youtube);*/
    //return youtube;

    /*function randomId() {
      const randomId = Math.random();
      return randomId;
      <YouTube
        apiKey="AIzaSyDgh0qAGY0pn7fOQ3TnJW0XHeKtLjNcRHU"
        videoId="wwMDvPCGeE0" // The YouTube video ID
        showFullscreenButton
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => this.setState({ error: e.error })}
        style={{ height: 300 }}
        host="https://www.youtube.com"
      />
    }*/

    //console.log(this.state.videoId);
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default Live;

//Live component
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/live.css";
import LiveVideo from "./LiveVideo.js";
import ScheduledLiveStream from "./ScheduledLiveStream.js";

class Live extends Component {
  state = {
    videoData: [],
    lessMoreText: [],
    API_KEY: "AIzaSyDgh0qAGY0pn7fOQ3TnJW0XHeKtLjNcRHU",
    channelId: "UCLA_DiR1FfKNvjuUpBHmylQ",
    // *fix* denne dataen kommer fra feil plass. skal sjekke event tabel og se på enum til livestreamgreia
    scheduledLiveStreams: [
      {
        id: 1,
        dateTime: "2018-11-20 13:20:23",
        title: "Vi streamer Live fra Pluto",
        description:
          "Consequat nisi sit magna esse commodo consectetur eu adipisicing in voluptate nisi nostrud velit. Mollit cupidatat consectetur et laborum sit cupidatat cillum officia non ut ex."
      },
      {
        id: 2,
        dateTime: "2018-11-19 15:30:21",
        title: "Vi streamer Live fra Mars",
        description:
          "Anim incididunt dolore consequat commodo. Occaecat laborum nulla ut anim magna ea proident sunt. Tempor tempor excepteur et aliquip aute cupidatat ad et mollit aliqua anim dfs fdf sd df df df d ffdfsfsdfsdf."
      },
      {
        id: 3,
        dateTime: "2018-11-18 13:34:12",
        title: "Vi streamer Live fra Saturn",
        description:
          "Duis labore do enim proident dolore dolor ex laborum officia ipsum reprehenderit. Exercitation sint eiusmod nulla ipsum duis reprehenderit commodo anim incididunt"
      },
      {
        id: 4,
        dateTime: "2018-11-18 13:40:12",
        title: "Vi streamer Live fra Neptun",
        description:
          "Do ex anim quis voluptate esse velit qui sint Lorem. Aliqua in duis occaecat amet."
      }
    ]
  };

  componentDidMount() {
    this.getLiveVideos();
  }

  /*  gets the live video data from the YouTube channel
      and outputs the live video(s) + its information   */
  getLiveVideos = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${
        this.state.channelId
      }&eventType=live&type=video&key=${
        this.state.API_KEY
      }&enablejsapi=1&origin=http://localhost:3000`
    )
      .then(function(response) {
        return response.json(); // pass the data as promise to next then block
      })
      .then(data => {
        let currentLive = data.pageInfo.resultsPerPage;
        // if there are live videos streaming on the YouTube channel..
        if (currentLive !== 0) {
          // .. it maps through the data..
          data.items.map(channelData => {
            // ..and stores theID's of the videos live streaming.
            const videoId = channelData.id.videoId;
            /*  Fetching the data from each video being live streamed 
                so we can access the full description of the video  */
            return fetch(
              `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${
                this.state.API_KEY
              }`
            )
              .then(function(response) {
                return response.json();
              })
              .then(data => {
                // maps through each live video from channel..
                let videoData = data.items.map(video => {
                  // and passes all data to component 'LiveVideo.js'
                  return (
                    <div key={video.id}>
                      <LiveVideo
                        liveVideoData={video}
                        apikey={this.state.API_KEY}
                      />
                    </div>
                  );
                });
                // combines all the objects of video data into one array and stores it as state "videoData"
                this.setState({
                  videoData: this.state.videoData.concat(videoData)
                });
              })
              .catch(function(error) {
                console.log("Request failed", error);
              });
          });
          //if there are no current live streams on the channel.
        } else {
          this.noCurrentStream();
        }
      });
  };

  noCurrentStream() {
    // let videoData = "there is no videodata";
    this.setState({ videoData: this.videoData });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className="pageTitle">Live</h1>
          <hr className="hrHeight" />
          <h3 className="subTitle">
            Vi streamer live til tider blablabla. Her kan du se live videoer fra
            festivalen. se som vi koser oss
          </h3>

          <div className="liveVideos">{this.state.videoData}</div>
          <ScheduledLiveStream
            ScheduledLiveStreams={this.state.scheduledLiveStreams}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Live;

//ScheduledLiveStream component
import React from "react";
import "../../styles/live.css";
import ReadMoreAndLess from "react-read-more-less";

const ScheduledLiveStream = props => {
  const nextLiveStream = props.ScheduledLiveStreams.map(nextLive => {
    return (
      <div key={nextLive.id} className="row nextLiveStream">
        <div className="col-3">
          <h5 className="upcomingStreamTitle">{nextLive.title}</h5>
        </div>
        <div className="col-2">
          <span>
            {nextLive.date} {nextLive.time}
          </span>
        </div>
        <div className="col-7">
          <ReadMoreAndLess
            className="read-more-content"
            charLimit={70}
            readMoreText="Les mer"
            readLessText="Les mindre"
          >
            {nextLive.text}
          </ReadMoreAndLess>
        </div>
      </div>
    );
  });

  return <div className="upcomingStream">{nextLiveStream}</div>;
};

export default ScheduledLiveStream;

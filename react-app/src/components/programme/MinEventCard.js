import React from "react";

const MinEventCard = props => {
  // Outputs "More info" div only if the user is on Programme page
  function checkUrl() {
    if (window.location.href.indexOf("program") > -1) {
      return (
        <React.Fragment>
          <div className="col-md-3">
            <button className="btn btn-outline-info infoBtn">Mer info</button>
          </div>
        </React.Fragment>
      );
    }
  }
  // Outputs "buy tickets" div only if the event is not free
  function checkPrice() {
    if (props.event.price !== 0) {
      return (
        <React.Fragment>
          <p className="price col-md-3">{props.event.price}</p>
          <div className=" col-md-3">
            <button className="btn btn-outline-success buy_ticketBtn">
              Kjøp billetter
            </button>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p className="price col-md-3">"GRATIS"</p>
          <span className="col-md-3" />
        </React.Fragment>
      );
    }
  }

  return (
    <div className="event row">
      <div className="col-md-4">
        <p className="event_title">{props.event.title}</p>
        <p className="venue_name">{props.event.venue}</p>
      </div>
      <div className="col-md-8 infoEvent">
        <div className="row">
          <p className="time col-md-3">
            <span role="img" aria-label="icon">
              &#128337;
            </span>{" "}
            {props.event.time}
          </p>
          {checkPrice()}
          {checkUrl()}
        </div>
      </div>
    </div>
  );
};

export default MinEventCard;

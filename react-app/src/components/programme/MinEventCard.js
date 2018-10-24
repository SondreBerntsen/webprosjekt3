import React from 'react';

const MinEventCard = (props) => {
  return (  
    <div className="card">
      <div className="card-body">
        <div>
          <p className="event_title">{props.event.title}</p>
          <p className="venue_name">{props.event.venue}</p>
        </div>
        <p className="time">{props.event.time}</p>
        <p className="price">{props.event.price}</p>
        <div className="buy_ticket">
          <p>Kjøp billetter</p>
        </div>
        <div className="more_info">
          <p>Mer info</p>
        </div>
      </div>
    </div>
  );
}
 
export default MinEventCard;
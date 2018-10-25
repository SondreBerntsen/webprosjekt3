import React from 'react';

const MinEventCard = (props) => {
  
  // Outputs "buy tickets" div only if the event is not free
  function checkPrice(){
    if(props.event.price !== 0){
      return(
        <React.Fragment>
          <p className="price">{props.event.price}</p>
          <div className="buy_ticket">
            <p>Kjøp billetter</p>
          </div>
        </React.Fragment>
      );
    }else{
      return(
        <p className="price">"GRATIS"</p>
      );
    }
  }

  return (  
    <div className="event">
      <div>
        <p className="event_title">{props.event.title}</p>
        <p className="venue_name">{props.event.venue}</p>
      </div>
      <p className="time">{props.event.time}</p>
      {checkPrice()}
      <div className="more_info">
        <p>Mer info</p>
      </div>
    </div>
  )
}
 
export default MinEventCard;
import React from 'react';
import MinEventCard from './MinEventCard';

const ProgrammeSchedule = (props) => {

  const days = props.days.map(day =>(
    <div key={day.id} className="day_card card">
      <h1>{day.day}</h1>
      {day.events.map(event => (
        <div key={event.id}>
          <MinEventCard event={event} />
        </div>
      ))}
    </div>
  ));
  return ( 
    days
  );
  
}
 
export default ProgrammeSchedule;
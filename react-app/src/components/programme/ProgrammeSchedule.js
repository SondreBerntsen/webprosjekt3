import React from 'react';
import MinEventCard from './MinEventCard';

const ProgrammeSchedule = (props) => {

  // Loots days array from props and maps each individual day to a card div
  const days = props.days.map(day => (
    <div key={day.id} className="day_card container">
      <h4>{day.day} 'dato'</h4>
      { // Loots events array from day object and maps each individual event to a MinEventCard component
        day.events.map(event => (
          <React.Fragment key={event.id}>
            {/* Passes event data as props to MinEventCard */}
            <MinEventCard key={event.id} event={event} />
          </React.Fragment>
        ))
      }
    </div>
  ))
  return (
    days
  )
}

export default ProgrammeSchedule;
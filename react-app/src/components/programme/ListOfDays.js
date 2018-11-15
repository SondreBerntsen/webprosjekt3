import React from 'react';

const listOfDays = (props) => {
  return (
    <div className="container horizontal_days row">
      {
        props.days.map(day => (
          <a href={"#"+day.date}><p key={day.date} className="horizontal_list_item">{day.day}</p></a>
        ))
      }
    </div>
  );
}

export default listOfDays;
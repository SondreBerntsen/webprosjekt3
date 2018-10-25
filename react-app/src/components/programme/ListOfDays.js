import React from 'react';

const listOfDays = (props) => {
  return ( 
    <div className="container horizontal_days">
    {
      props.days.map(day =>(
        <p key={day.id} className="horizontal_list_item">{day.day}</p>
      ))
    }
    </div>   
  );
}

export default listOfDays;
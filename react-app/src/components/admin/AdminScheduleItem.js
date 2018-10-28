import React from 'react';

const AdminScheduleItem = (props) => {

  /* 
    Props is data for schedule item, with for example this data:
    id: 1,
    day: 1,
    title: "This guy doing something",
    venue: "This place",
    time: "20:00",
    date: "20.09",
    price: "100",
    availability: "Very few spots left", //idk about this
    infoText: "qwerty mc. lorem"
  */
 let {event: {title, venue, time, price, availability}} = props;
 
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <p>{venue}</p>
      <p>{time}</p>
      <p>{price}</p>
      <p>{availability}</p>
      <div className="editScheduleItem hiddenPanel">
        {/* 
          form which lets you edit the above items i guess.
          Title is text
          Venue is dropdown
          Time is idk
          Price is text (or number?)

          Let's use Formik probably
         */}
      </div>
      <button>Edit</button> {/* Button toggles form panel */}
    </React.Fragment> 
  );

}
 
export default AdminScheduleItem;
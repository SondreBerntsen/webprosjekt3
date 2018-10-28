import React from 'react';

const AdminVenuesItem = (props) => {

  /* 
    Props is data for a venue, for example:
    id: 1,
    name: "Cool place X",
    address: "whatever",
    capacity: 100
  */

  function checkCapacity(){
    if(props.venue.capacity === 0){
      return(
        <p>Unlimited/Public property</p>
      )
    }
    else{
      return(
        <p>{props.venue.capacity}</p>
      )
    }
  }

  return(
   <React.Fragment>
     <p>{props.venue.name}</p>
     <p>{props.venue.address}</p>
     {checkCapacity()}
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
  )
}

export default AdminVenuesItem;
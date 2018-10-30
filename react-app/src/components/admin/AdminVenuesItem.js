import React from 'react';

const AdminVenuesItem = (props) => {

  /* 
    Props is data for a venue, for example:
    id: 1,
    name: "Cool place X",
    address: "whatever",
    capacity: 100
  */


  function checkCapacity() {
    if (props.venue.capacity === 0) {
      return (
        <p className="col-lg-4">Unlimited/Public property </p>
      )
    }
    else {
      return (
        <p className="col-lg-4"><span className="smallHeading">Capacity: </span>{props.venue.capacity}</p>
      )
    }
  }

  return (
    <React.Fragment>
      <div className="venueCard row">
        <p className="col-lg-5"><span className="smallHeading">Address: </span> {props.venue.address}</p>
        {checkCapacity()}
        <div className="col-lg-3">
          <button className="btn btn-sm btn-danger btnVenue">Delete</button>
          <button className="btn btn-sm btnVenue btn-secondary" type="button" data-toggle="collapse" data-target={'#venue' + props.venue.id} aria-expanded="false" aria-controls={'venue' + props.venue.id}>Edit</button>
        </div>
      </div>
      <div className="editScheduleItem collapse" id={'venue' + props.venue.id}>
        <form className="col-md-6 col-lg-4">
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" value={props.venue.address} />
          </div>
          <div className="form-group">
            <label>Capacity</label>
            <input type="number" class="form-control" value={props.venue.capacity} />
          </div>
          <button type="submit" class="btn btn-info btn-sm">Edit</button>
        </form>
      </div>

    </React.Fragment>
  )
}

export default AdminVenuesItem;
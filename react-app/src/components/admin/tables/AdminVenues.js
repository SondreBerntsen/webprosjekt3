import React, { Component } from 'react'
import AdminVenuesItem from '../AdminVenuesItem'

class AdminVenues extends Component {
  state = {
    venues: [
      {
        id: 1,
        address: "Cool place X", // Probably need only name or address, not both
        capacity: 100
      },
      {
        id: 2,
        address: "Cool place Y", // Probably need only name or address, not both
        capacity: 75
      },
      {
        id: 3,
        address: "Cool place Z", // Probably need only name or address, not both
        capacity: 0 // Let's say 0 means public space/free entry/don't care how many show up
      }
    ]
  }
  render() {
    return (

      <div className="container tablesAdmin col-md-9 col-lg-10">
        <button className=" createNewBtn btn btn-info btn-sm" type="button" data-toggle="collapse" data-target='#newVenueForm' aria-expanded="false" aria-controls='newVenueForm'>Create new venue</button>
        <div className=" collapseForm col-md-12 collapse" id="newVenueForm">
          <form className="col-md-6 col-lg-4">
            <div className="form-group">
              <label>Address</label>
              <input type="text" className="form-control" placeholder="Enter address" />
            </div>
            <div className="form-group">
              <label>Capacity</label>
              <input type="number" class="form-control" />
            </div>
            <button type="submit" class="btn btn-info btn-sm">Submit</button>
          </form>
        </div>
        {
          this.state.venues.map(venue => (
            <div key={venue.id}>
              <AdminVenuesItem venue={venue} />
            </div>
          ))
        }
      </div>

    )
  }
}

export default AdminVenues;
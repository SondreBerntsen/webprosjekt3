import React, { Component } from 'react'
import AdminVenuesItem from '../AdminVenuesItem'

class AdminVenues extends Component {
  state = {
    venues: [
      {
        id: 1,
        name: "Cool place X",
        address: "whatever", // Probably need only name or address, not both
        capacity: 100
      },
      {
        id: 2,
        name: "Cool place Y",
        address: "whatever", // Probably need only name or address, not both
        capacity: 75
      },
      {
        id: 3,
        name: "Cool place Z",
        address: "whatever", // Probably need only name or address, not both
        capacity: 0 // Let's say 0 means public space/free entry/don't care how many show up
      }
    ]
  }
  render() {
    return (

      <div className="container tablesAdmin">
        <h1>This is the AdminVenues page</h1>
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
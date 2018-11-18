import React, { Component } from "react";
import AdminVenuesItem from "../AdminVenuesItem";

class AdminVenues extends Component {
  state = {
    venues: [{ id: '', address: '', capacity: '' }]
  };
  componentDidMount() {
    this.getVenueList();
  }
  getVenueList = _ => {
    //sends a fetch request to get all the venues and updates the state
    fetch(`http://localhost:5000/venues`)
      .then(response => response.json())
      .then(response => this.setState({ venues: response }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <button
          className=" createNewBtn btn btn-info btn-sm"
          type="button"
          data-toggle="collapse"
          data-target="#newVenueForm"
          aria-expanded="false"
          aria-controls="newVenueForm"
        >
          Create new venue
        </button>
        <div className=" collapseForm col-md-12 collapse" id="newVenueForm">
          <form className="col-md-6 col-lg-4">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter address"
              />
            </div>
            <div className="form-group">
              <label>Capacity</label>
              <input type="number" className="form-control" />
            </div>
            <button type="submit" className="btn btn-info btn-sm">
              Submit
            </button>
          </form>
        </div>
        {/*Mapping out all of the venues in the array*/}
        {this.state.venues.map(venue => (
          <div key={venue.id}>
            <AdminVenuesItem venue={venue} />
          </div>
        ))}
      </div>
    );
  }
}

export default AdminVenues;

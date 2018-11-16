import React, { Component } from "react";
import AdminEventItem from "../AdminEventItem";

class AdminEvents extends Component {
  state = {
    events: [
      {
        id: 1,
        title: "Cool event title",
        date: "2018-07-22",
        time: "20:00",
        price: "200",
        linkYoutube: "https://www.youtube.com/watch?v=z3U0udLH974",
        linkToTickets: "https://www.ticketmaster.com/",
        img:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg",
        thumbnail:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg",
        descr:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 2,
        title: "Cool event title 2",
        date: "2018-07-22",
        time: "20:00",
        price: "200",
        linkYoutube: "https://www.youtube.com/watch?v=z3U0udLH974",
        linkToTickets: "https://www.ticketmaster.com/",
        img:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg",
        thumbnail:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg",
        descr:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="container tablesAdmin col-md-9 col-lg-10">
          <button
            className="createNewBtn btn btn-sm btn-info"
            type="button"
            data-toggle="collapse"
            data-target="#newEventForm"
            aria-expanded="false"
            aria-controls="newEventForm"
          >
            Create new event
          </button>
          <div className="collapseForm col-12 collapse" id="newEventForm">
            <form className="col-md-8 col-lg-6">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter event title"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Link to tickets</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter link"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label>Time</label>
                  <input type="time" className="form-control" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Price</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label>Youtube link</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Image</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label>Thumbnail</label>
                  <input type="file" className="form-control" />
                </div>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Planned Livestream
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  defaultChecked
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  No livestream
                </label>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-info btn-sm">
                Submit
              </button>
            </form>
          </div>
          {this.state.events.map(event => (
            <div key={event.id}>
              <AdminEventItem event={event} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default AdminEvents;

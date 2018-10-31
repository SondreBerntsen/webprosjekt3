import React, { Component } from 'react';


class AdminEvents extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        {/*Denne skal kanskje flyttes, men legger den her enn så lenge*/}
        <div className="container tablesAdmin col-md-9 col-lg-10">
          <h1>This is the AdminEvents page</h1>
          <button className="createNewBtn btn btn-sm btn-info" type="button" data-toggle="collapse" data-target='#newEventForm' aria-expanded="false" aria-controls='newEventForm'>Create new event</button>
          <div className="collapseForm col-12 collapse" id="newEventForm">
            <form className="col-md-8 col-lg-6">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Title</label>
                  <input type="text" className="form-control" placeholder="Enter event title" />
                </div>
                <div className="form-group col-md-6">
                  <label>Artist</label>
                  <input type="text" className="form-control" />
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
              <div className="form-group">
                <label>Descrition</label>
                <textarea type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-info btn-sm">Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>


    );
  }
}

export default AdminEvents;
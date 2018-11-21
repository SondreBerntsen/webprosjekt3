import React, { Component } from "react";


class AdminEventItem extends Component {

  getImage = (id) => {
    try {
      return <img className="eventImgEdit "
        src={require('../../uploadedImg/eventImg/' + id)}
        alt="eventImg" />
    }
    catch (err) {
      return null
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="elementCardAdmin row">
          <p className="col-lg-5">
            <span className="smallHeading">Tittel: </span> {this.props.event.title}
          </p>
          <p className="col-lg-4">
            <span className="smallHeading">Dato: </span> {this.props.event.date}
          </p>
          <div className="col-lg-3">
            <button className="btn btn-sm btn-danger btnInElementAdmin" onClick={() => { this.props.handleDelete(this.props.event.id) }}>
              Slett
          </button>
            <button
              className="btn  btn-secondary btnInElementAdmin btn-sm"
              type="button"
              data-toggle="collapse"
              data-target={"#event" + this.props.event.id}
              aria-expanded="false"
              aria-controls={"event" + this.props.event.id}
            >
              Rediger
          </button>
          </div>
        </div>
        <div className="editScheduleItem collapse" id={"event" + this.props.event.id}>
          <form className="col-md-8 col-lg-6">
            <div className="form-group">
              <label>Tittel</label>
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.event.title}
              />
            </div>
            <div className="form-group">
              <label>Bilde</label>
              <input
                type="file"
                className="form-control"

              />
            </div>
            {this.getImage(this.props.event.id)}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Dato </label>
                <input
                  type="date"
                  className="form-control"
                  defaultValue={this.props.event.date}//fix
                />
              </div>
              <div className="form-group col-md-6">
                <label>Tid</label>
                <input
                  type="time"
                  className="form-control"
                  defaultValue={this.props.event.time}
                />
              </div>
            </div>


            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Youtube link</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={this.props.event.youtube_link}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Link til betaling</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={this.props.event.payment_link}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Beskrivelse</label>
              <textarea
                id="textareaNews"
                className="form-control"
                defaultValue={this.props.event.text}
              />
            </div>
            <button type="submit" className="btn btn-info btn-sm">
              Rediger
          </button>
          </form>
        </div>
      </React.Fragment>
    );
  }

};

export default AdminEventItem;

import React, { Component } from "react";
import {fixDateString, fixTimeString} from '../Functions'


class AdminReviewItem extends Component {
  state = {}
  componentDidMount() {
    this.setState(this.props.year)
    console.log(this.props.year)
  }
  handleDelete = _ => {
    /*
    let body = {
      id: this.state.id
    }
    if (window.confirm('Are you sure you wish to delete this item?')) {
      fetch('http://localhost:5000/event/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(_ => {
          this.getEventList();
        })
        .catch(err => console.log(err))
    }
    */
  }
  handleChange = (e) => {
    /*
    this.setState({ status: 'editing' })
    switch (e.target.name) {
      case 'venue':
        let venue = e.target.value.split('&&&')
        this.setState({ venue: { id: venue[0], address: venue[1] } })
        this.refs.venueIcon.innerHTML = "&#9998;"
        break;
      case 'time':
        this.setState({ time: e.target.value })
        this.refs.timeIcon.innerHTML = "&#9998;"
        break;
      case 'price':
        this.setState({ price: e.target.value })
        this.refs.priceIcon.innerHTML = "&#9998;"
        break;
      case 'date':
        this.setState({ date: e.target.value })
        console.log(this.state.date)
        this.refs.dateIcon.innerHTML = "&#9998;"
        break;
      default:
    }
    */
  }

  handleSubmit = (e) => {
    /*
    e.preventDefault()
    let body = {
      id: this.state.id,
      title: this.state.title,
      venue: this.state.venue.id,
      time: this.state.time,
      price: this.state.price,
      date: this.state.date
    }
    console.log(body)

    fetch(`http://localhost:5000/programme/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then((response) => {
        response.json()
        this.setState({ status: 'edited' })
        this.refs.title.innerHTML = this.state.title
        this.refs.address.innerHTML = this.state.venue.address
        this.refs.price.innerHTML = this.state.price
        this.refs.time.innerHTML = this.state.time
        this.refs.date.innerHTML = this.state.date
        this.refs.venueIcon.innerHTML = ""
        this.refs.timeIcon.innerHTML = ""
        this.refs.priceIcon.innerHTML = ""
        this.refs.dateIcon.innerHTML = ""
        console.log(this.state)
      })
      .catch(err => console.log(err))
    */
  }
  render() {
    return (
      <React.Fragment>
        <div className="elementCardAdmin">
          <div className="row">
            <h3 className="col-md-10 col-sm-10" ref="title">{this.props.year.year}</h3>
            <div className="col-md-2 col-sm-2">
              <button
                className="btn  btn-secondary btnInElementAdmin btn-sm  "
                type="button"
                data-toggle="collapse"
                data-target={"#scheduleItemForm" + this.props.year.id}
                aria-expanded="false"
                aria-controls={"scheduleItemForm" + this.props.year.id}
              >
                Rediger
              </button>
            </div>
          </div>
        </div>

        <div className="collapse editScheduleItem" id={"scheduleItemForm" + this.props.year.id}>
          <form className="col-md-12" >
            <div className="form-row">
              <div className="form-row">
                <div className="form-group col-md-2">
                    <label>Year</label>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={this.props.year.year}
                    ></input>
                </div>
                <div className="form-group col-md-12">
                    <label>Text</label>
                    <textarea
                      type="text-area"
                      className="form-control"
                      defaultValue={this.props.year.text}
                    ></textarea>
                </div>
                <div className="form-group col-md-12">
                  <label>Recordings</label>
                  <div className="col-md-6">
                    {
                      this.props.year.recordings.map((link, index) => {
                        return(
                          <div key={index} className="colorandmarginchangeFIX subDropdown">
                            <div className="row">
                              <p className="col-md-9">{link.name}</p>
                              <button 
                                className="btn btn-secondary btnInElementAdmin btn-sm col-md-2" 
                                type="button">Delete</button>
                            </div>
                            <p>{link.link}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="form-group col-md-12">
                <label>Images</label>
                <div className="row subDropdown">
                  <button className="btn btn-secondary btnInElementAdmin btn-sm col-md-2" type="button">Legg til nytt bilde</button>
                  {
                    this.props.year.slides.map((slide, index) => {
                      try {
                        return (
                          <img 
                            className="eventImgEdit col-md-4"
                            src={require('../../uploadedImg/sliderImg/' + slide.id)}
                            alt={this.props.year.year + '_slide_' + index} 
                          />
                        )
                      }
                      catch (err) {
                        return null
                      }
                    })
                  }
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-info btn-sm">
              Rediger
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }

}

export default AdminReviewItem;
import React, {Component} from "react";

class AdminScheduleItem extends Component {
  state = {
    id: '', 
    title: '', 
    venue: '', 
    time: '', 
    price: '', 
    date: '',
    status: 'unchanged'
  }
  componentDidMount(){
    this.setState({...this.state} = this.props.event)
  } 
  
  handleChange = (e) => {
    this.setState({status: 'editing'})
    switch (e.target.name){
      case 'venue': 
        this.setState({venue: e.currentTarget.value})
        this.refs.venueIcon.innerHTML = "&#9998;"	
        break;
      case 'time': 
        this.setState({time: e.target.value})
        this.refs.timeIcon.innerHTML = "&#9998;"	
        break;
      case 'price':
        this.setState({price: e.target.value})
        this.refs.priceIcon.innerHTML = "&#9998;"
        break;
      case 'date':
        this.setState({date: e.target.value})
        this.refs.dateIcon.innerHTML = "&#9998;"
        break;
      default:
    }
  }

  render(){
    return (
      <React.Fragment>
        <div className="elementCardAdmin">
          <h3 className="col-lg-12">{this.props.event.title}</h3>
          <div className="col-md-12 row">
            <p className="col-lg-12">
              <span className="smallHeading">Address: </span> 
              <span ref="address" >{this.props.event.venue}</span>
            </p>
          </div>
          <div className="col-md-12 row">
            <p className="col-md-3">
              <span className="smallHeading">Tid: </span>
              <span ref="time" >{this.props.event.time}</span>
            </p>
            <p className="col-md-7">
              <span className="smallHeading">Pris: </span>
              <span ref="price" >kr. {this.props.event.price}.-</span>
            </p>
            <div className="col-md-2">
              <button
                className="btn  btn-secondary btnInElementAdmin btn-sm  "
                type="button"
                data-toggle="collapse"
                data-target={"#scheduleItemForm" + this.props.event.id}
                aria-expanded="false"
                aria-controls={"scheduleItemForm" + this.props.event.id}
              >
                Edit
              </button>
            </div>
            {/*<p>{availability}</p>*/}
          </div>
        </div>
        <div className="collapse editScheduleItem" id={"scheduleItemForm" + this.props.event.id}>
          <form className="col-md-8 col-lg-8">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Address</label>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Velg fra liste
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {
                      this.props.venues.map((venue, index) => (
                        <div
                          key={venue.id}
                          name="venue"
                          className="dropdown-item"
                          value={venue.address}
                          onClick={this.handleChange}
                        >
                          <h5>{venue.address}</h5>
                          <p>Plass til ca. {venue.capacity}</p>
                          {(this.props.venues.length !== index + 1) && <hr />}
                        </div>
                      ))
                    }
                  </div>
                </div>
                <span className="editIcon col-md-2" ref="venueIcon"></span>
              </div>
              <div className="form-group col-md-6">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  defaultValue={this.props.event.price}
                  onChange={this.handleChange}
                />
                <span className="editIcon col-md-2" ref="priceIcon"></span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Time</label>
                <input 
                  type="time"
                  name="time"
                  className="form-control" 
                  defaultValue={this.props.event.time}
                  onChange={this.handleChange}
                />
                <span className="editIcon col-md-2" ref="timeIcon"></span>
              </div>
              <div className="form-group col-md-6">
                <label>Date</label>
                <input 
                  type="date"
                  name="date"
                  className="form-control" 
                  defaultValue={this.props.event.date}
                  onChange={this.handleChange}
                />
                <span className="editIcon col-md-2" ref="dateIcon"></span>
              </div>
            </div>
  
            <button type="submit" className="btn btn-info btn-sm">
              Edit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
  
}

export default AdminScheduleItem;

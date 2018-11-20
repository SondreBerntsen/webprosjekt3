import React, {Component} from "react";

class AdminScheduleItem extends Component {
  state = {
    id: '', 
    title: '', 
    venue: {
      id: '',
      address: ''
    }, 
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
        let venue = e.target.value.split('&&&')
        this.setState({venue: {id: venue[0], address: venue[1]}})
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

  handleSubmit = (e) => {
    e.preventDefault()

    let body = {
      id: this.state.id,
      title: this.state.title,
      venue: this.state.venue.id,
      time: this.state.time + ':00',
      price: this.state.price,
      date: this.state.date
    }
    /*
    fetch(`http://localhost:5000/programme/update`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(_ => {
      this.setState({status: 'edited'})
      this.refs.title.innerHTML = this.state.title
      this.refs.address.innerHTML = this.state.venue.address
      this.refs.price.innerHTML = this.state.price
      this.refs.time.innerHTML = this.state.time
      this.refs.date.innerHTML = this.state.date
      this.refs.addressIcon.innerHTML = ""
      this.refs.capacityIcon.innerHTML = ""
    })
    .catch( err => console.log(err))
    */
  }
  render(){
    return (
      <React.Fragment>
        <div className="elementCardAdmin">
          <div className="row">
            <h3 className="col-md-10 col-sm-10" ref="title">{this.props.event.title}</h3>
            <div className="col-md-2 col-sm-2">
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
          </div>
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
            <p className="col-md-3">
              <span className="smallHeading">Dato: </span>
              <span ref="date">{this.props.event.date}</span>
            </p>
            <p className="col-md-6">
              <span className="smallHeading">Pris: </span>
              <span ref="price" >kr. {this.props.event.price}.-</span>
            </p>
          </div>
        </div>
        <div className="collapse editScheduleItem" id={"scheduleItemForm" + this.props.event.id}>
          <form className="col-md-8 col-lg-8">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Address</label>
                  <select name="venue" className="inputDropdown" onChange={this.handleChange}>
                    {
                      this.props.venues.map((venue) => (
                        <option 
                          key={venue.id} 
                          value={venue.id + '&&&' + venue.address}
                        >
                          {venue.address}{!venue.capacity ? " (ute/offentlig sted)" : ` (plass til ca. ${venue.capacity})`}
                        </option>
                      ))
                    }
                    </select>
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
                <label>Time (HH:MM)</label>
                <input 
                  type="text"
                  name="time"
                  className="form-control" 
                  defaultValue={this.props.event.time}
                  onChange={this.handleChange}
                />
                <span className="editIcon col-md-2" ref="timeIcon"></span>
              </div>
              <div className="form-group col-md-6">
                <label>Date (DD/MM/YYYY)</label>
                <input 
                  type="text"
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

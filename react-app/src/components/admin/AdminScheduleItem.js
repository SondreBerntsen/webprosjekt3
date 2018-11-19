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

  render(){
    return (
      <React.Fragment>
        <div>
          <div className="elementCardAdmin row">
            <p className="col-lg-5">
              <span className="smallHeading">Tittel: </span> 
              <span ref="title" >{this.props.event.title}</span>
            </p>
            <p className="col-lg-5">
              <span className="smallHeading">Address: </span> 
              <span ref="address" >{this.props.event.venue}</span>
            </p>
            <p className="col-md-3">
              <span className="smallHeading">Tid: </span>
              <span ref="time" >{this.props.event.time}</span>
            </p>
            <p className="col-md-3">
              <span className="smallHeading">Pris: </span>
              <span ref="price" >{this.props.event.price}</span>
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
          <form className="col-md-8 col-lg-6">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={this.props.event.venue}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={this.props.event.price}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Time</label>
                <input 
                  type="time" 
                  className="form-control" 
                  defaultValue={this.props.event.time} 
                />
              </div>
              <div className="form-group col-md-6">
                <label>Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  defaultValue={this.props.event.date} />
              </div>
            </div>
  
            <button type="submit" className="btn btn-info btn-sm">
              Edit
            </button>
          </form>
        </div>
        <div className="">
          {/* 
            form which lets you edit the above items i guess.
            Title is text
            Venue is dropdown
            Time is idk
            Price is text (or number?)
  
            Let's use Formik probably
           */}
        </div>
      </React.Fragment>
    );
  }
  
}

export default AdminScheduleItem;

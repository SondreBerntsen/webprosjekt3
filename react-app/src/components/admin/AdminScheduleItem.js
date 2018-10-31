import React from 'react';

const AdminScheduleItem = (props) => {

  /* 
    Props is data for schedule item, with for example this data:
    id: 1,
    day: 1,
    title: "This guy doing something",
    venue: "This place",
    time: "20:00",
    date: "20.09",
    price: "100",
    availability: "Very few spots left", //idk about this
    infoText: "qwerty mc. lorem"
  */
  let { event: { id, title, venue, time, price, date } } = props;

  return (
    <React.Fragment>
      <div >
        <h5>{title}</h5>
        <div className="elementCardAdmin row">
          <p className="col-md-4"><span className="smallHeading">Address: </span>{venue}</p>
          <p className="col-md-3"><span className="smallHeading">Tid: </span>{time}</p>
          <p className="col-md-3"><span className="smallHeading">Pris: </span>{price}</p>
          <div className="col-md-2">
            <button className="btn  btn-secondary btnInElementAdmin btn-sm  " type="button" data-toggle="collapse" data-target={'#scheduleItemForm' + id} aria-expanded="false" aria-controls={'scheduleItemForm' + id}>Edit</button>
          </div>
          {/*<p>{availability}</p>*/}
        </div>
      </div>
      <div className="collapse editScheduleItem" id={'scheduleItemForm' + id}>
        <form className="col-md-8 col-lg-6">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Address</label>
              <input type="text" className="form-control" defaultValue={venue} />
            </div>
            <div className="form-group col-md-6">
              <label>Price</label>
              <input type="number" class="form-control" defaultValue={price} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Time</label>
              <input type="time" class="form-control" defaultValue={time} />
            </div>
            <div className="form-group col-md-6">
              <label>Date</label>
              <input type="date" class="form-control" defaultValue={date} />
            </div>
          </div>

          <button type="submit" class="btn btn-info btn-sm">Edit</button>
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

export default AdminScheduleItem;
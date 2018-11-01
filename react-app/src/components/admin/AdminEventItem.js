import React from 'react';

const AdminEventItem = (props) => {

    return (
        <React.Fragment>
            <div className="elementCardAdmin row">
                <p className="col-lg-5"><span className="smallHeading">Title: </span> {props.event.title}</p>
                <p className="col-lg-4"><span className="smallHeading">Date: </span> {props.event.date}</p>
                <div className="col-lg-3">
                    <button className="btn btn-sm btn-danger btnInElementAdmin">Delete</button>
                    <button className="btn  btn-secondary btnInElementAdmin btn-sm" type="button" data-toggle="collapse" data-target={'#event' + props.event.id} aria-expanded="false" aria-controls={'event' + props.event.id} >Edit</button>
                </div>
            </div>
            <div className="editScheduleItem collapse" id={'event' + props.event.id}>
                <form className="col-md-8 col-lg-6">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" defaultValue={props.event.title} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Date</label>
                            <input type="date" className="form-control" defaultValue={props.event.date} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Time</label>
                            <input type="time" className="form-control" defaultValue={props.event.time} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Youtube link</label>
                            <input type="text" className="form-control" defaultValue={props.event.linkYoutube} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Link to payment</label>
                            <input type="text" className="form-control" defaultValue={props.event.linkToTickets} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Event description</label>
                        <textarea id="textareaNews" class="form-control">{props.event.descr}</textarea>
                    </div>
                    <button type="submit" class="btn btn-info btn-sm">Edit</button>
                </form>
            </div>
        </React.Fragment>
    )

}

export default AdminEventItem;
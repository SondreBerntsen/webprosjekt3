import React from "react";

const AdminContactPerson = (props) => {

  let { contact: { id, name, image, profession, phone, email } } = props;
  return (
    <React.Fragment>
      <div className="elementCardAdmin row">
        <p className="col-md-10"><span className="smallHeading">{name}</span></p>
        <div className="col-md-2">
          <button className="btn btn-secondary btnInElementAdmin btn-sm" type="button" data-toggle="collapse" data-target={'#contactPersonForm' + id} aria-expanded="false" aria-controls={'contactPersonForm' + id}>Edit</button>
        </div>
      </div>

      <div className="collapse editScheduleItem" id={'contactPersonForm' + id}>
        <form className="col-md-8 col-lg-6">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input type="text" defaultValue={name} className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Image</label>
              <input type="file" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Profession</label>
              <input type="text" defaultValue={profession} className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Phone</label>
              <input type="number" defaultValue={phone} className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input type="email" defaultValue={email} className="form-control" />
            </div>
          </div>

          <button type="submit" className="btn btn-info btn-sm">Save</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AdminContactPerson;
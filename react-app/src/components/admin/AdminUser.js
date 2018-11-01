import React from "react";

const AdminUser = (props) => {
  let { user: { id, userName, email, hashedPass, type } } = props;
  return (
    <React.Fragment>
      <div>
        <div className="elementCardAdmin row">
          <p className="col-md-10"><span className="smallHeading">{userName}</span></p>
          <div className="col-md-2">
            <button className="btn btn-sm btn-danger btnInElementAdmin">Delete</button>
            <button className="btn  btn-secondary btnInElementAdmin btn-sm  " type="button" data-toggle="collapse" data-target={'#userForm' + id} aria-expanded="false" aria-controls={'userForm' + id}>Edit</button>

          </div>
        </div>
      </div>

      <div className="collapse editScheduleItem" id={'userForm' + id}>
        <form className="col-md-6 col-lg-4">
          <div className="form-group ">
            <label>Username</label>
            <input type="text" defaultValue={userName} className="form-control" />
          </div>
          <div className="form-group ">
            <label>Email</label>
            <input type="email" defaultValue={email} className="form-control" />
          </div>
          <div className="form-group ">
            <label>Password</label>
            <input type="password" defaultValue={hashedPass} className="form-control" />
          </div>
          <div className="form-group ">
            <label>Repeat password</label>
            <input type="password" defaultValue={hashedPass} className="form-control" />
          </div>
          <div className="form-group ">
            <label>Type</label>
            {/*Lag funksjon her fix*/}
            <select className="form-control custom-select" >
              <option selected={type}>{type}</option>
              <option value="Admin">Admin</option>
              <option value="journalist">journalist</option>
            </select>
          </div>


          <button type="submit" className="btn btn-info btn-sm">Save</button>
        </form>
      </div>

    </React.Fragment>
  );
}

export default AdminUser;
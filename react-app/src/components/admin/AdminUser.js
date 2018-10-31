import React from "react";

const AdminUser = (props) => {
  let {user: {id, userName, hashedPass, type}} = props;
  return ( 
    <React.Fragment>
      <div>
        <div className="elementCardAdmin row">
          <p className="col-md-4"><span className="smallHeading">{userName}</span></p>
          <div className="col-md-2">
            <button className="btn  btn-secondary btnInElementAdmin btn-sm  " type="button" data-toggle="collapse" data-target={'#userForm' + id} aria-expanded="false" aria-controls={'userForm' + id}>Edit</button>
            <button className="btn btn-sm btn-danger btnInElementAdmin">Delete</button>
          </div>
        </div>
      </div>

      <div className="collapse editScheduleItem" id={'userForm' + id}>
        <form className="col-md-8 col-lg-6">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Username</label>
              <input type="text" defaultValue={userName} className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input type="password" defaultValue={hashedPass} className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Repeat password</label>
              <input type="password" defaultValue={hashedPass} className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Type</label>
              {/* This should be a dropdown with available user types, OR a checklist of operations the user will be allowed to perform */}
              <input type="text" defaultValue={type} className="form-control" />
            </div>
          </div>

          <button type="submit" className="btn btn-info btn-sm">Save</button>
        </form>
      </div>

    </React.Fragment>
   );
}
 
export default AdminUser;
import React from "react";

const AdminUser = props => {
  let {
    user: { id, name, email, password, type }
  } = props;
  return (
    <React.Fragment>
      <div>
        <div className="elementCardAdmin row">
          <p className="col-md-10">
            <span className="smallHeading">{name}</span>
          </p>
          <div className="col-md-2">
            <button className="btn btn-sm btn-danger btnInElementAdmin">
              Slett
            </button>
            <button
              className="btn  btn-secondary btnInElementAdmin btn-sm  "
              type="button"
              data-toggle="collapse"
              data-target={"#userForm" + id}
              aria-expanded="false"
              aria-controls={"userForm" + id}
            >
              Rediger
            </button>
          </div>
        </div>
      </div>

      <div className="collapse editScheduleItem" id={"userForm" + id}>
        <form className="col-md-6 col-lg-4">
          <div className="form-group ">
            <label>Navn</label>
            <input
              type="text"
              defaultValue={name}
              className="form-control"
            />
          </div>
          <div className="form-group ">
            <label>Epost</label>
            <input type="email" defaultValue={email} className="form-control" />
          </div>
          <div className="form-group ">
            <label>Passord</label>
            <input
              type="password"
              defaultValue={password}
              className="form-control"
            />
          </div>
          <div className="form-group ">
            <label>Gjenta passord</label>
            <input
              type="password"
              defaultValue={password}
              className="form-control"
            />
          </div>
          <div className="form-group ">
            <label>Type</label>
            {/*Lag funksjon her fix*/}
            <select className="form-control custom-select">
              <option defaultValue={type}>{type}</option>
              {type !== "admin" ?
                <option defaultValue="admin">admin</option>
                : <option defaultValue="journalist">journalist</option>
              }
            </select>
          </div>
          <button type="submit" className="btn btn-info btn-sm">
            Rediger
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AdminUser;

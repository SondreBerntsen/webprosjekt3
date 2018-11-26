
import React, { Component } from "react";

class AdminUser extends Component {
  handleUpdateSubmit = (e) => {
    e.preventDefault()
    let body = {
      id: this.props.user.id,
      name: this.refs.updateUserName.value,
      email: this.refs.updateUserEmail.value,
      type: this.refs.updateUserType.value,
    }
    fetch(`http://localhost:5000/adminUsers/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(function (response) {
        if (response.status >= 400) {
          throw alert('oh no');
        }
      })
      .then(_ => {
        alert('yey det gikk')
      })
      .catch(err => console.log(err))
  }
  handlePasswordUpdate = (e) => {
    e.preventDefault()
    let body = {
      id: this.props.user.id,
      password: this.refs.updateUserPassword.value,
    }
    console.log(body);
    fetch(`http://localhost:5000/adminUsers/updatepwd`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(function (response) {
        if (response.status >= 400) {
          throw alert('oh no');
        }
      })
      .then(_ => {
        alert('yey det gikk')
      })
      .catch(err => console.log(err))
  }
  check_pass = _ => {
    if (document.getElementById('updatePassword').value ===
      document.getElementById('password_repeat').value) {
      document.getElementById('submitPassword').disabled = false;
    } else {
      document.getElementById('submitPassword').disabled = true;
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="elementCardAdmin row">
            <p className="col-md-10">
              <span className="smallHeading">{this.props.user.name}</span>
            </p>
            <div className="col-md-2">
              <button className="btn btn-sm btn-danger btnInElementAdmin" onClick={() => { this.props.user.handleDelete(this.props.id) }}>
                Slett
            </button>
              <button
                className="btn  btn-secondary btnInElementAdmin btn-sm  "
                type="button"
                data-toggle="collapse"
                data-target={"#userForm" + this.props.user.id}
                aria-expanded="false"
                aria-controls={"userForm" + this.props.user.id}
              >
                Rediger
            </button>
            </div>
          </div>
        </div>

        <div className="collapse editScheduleItem" id={"userForm" + this.props.user.id}>
          <div className="row">
            <form className="col-md-6 col-lg-4" onSubmit={this.handleUpdateSubmit}>
              <div className="form-group ">
                <label>Navn</label>
                <input
                  type="text"
                  defaultValue={this.props.user.name}
                  className="form-control"
                  ref="updateUserName"
                />
              </div>
              <div className="form-group ">
                <label>Epost</label>
                <input type="email"
                  defaultValue={this.props.user.email}
                  className="form-control"
                  ref="updateUserEmail"
                />
              </div>

              <div className="form-group ">
                <label>Type</label>
                <select className="form-control custom-select" ref="updateUserType">
                  <option defaultValue={this.props.type}>{this.props.user.type}</option>
                  {this.props.user.type !== "admin" ?
                    <option defaultValue="admin">admin</option>
                    : <option defaultValue="journalist">journalist</option>
                  }
                </select>
              </div>
              <button type="submit" className="btn btn-info btn-sm">
                Rediger
              </button>
            </form>
            <form className="col-md-6 col-lg-4" onSubmit={this.handlePasswordUpdate}>
              <div className="form-group ">
                <label>Nytt passord</label>
                <input
                  type="password"
                  className="form-control"
                  ref="updateUserPassword"
                  id="updatePassword"
                  onChange={() => { this.check_pass() }}
                />
              </div>
              <div className="form-group ">
                <label>Gjenta passord</label>
                <input
                  type="password"
                  className="form-control"
                  id="password_repeat"
                  onChange={() => { this.check_pass() }}
                />
              </div>
              <button type="submit " className="btn btn-info btn-sm " id="submitPassword">
                Rediger passord
              </button>
            </form>
          </div>

        </div>
      </React.Fragment>
    );
  }

};

export default AdminUser;

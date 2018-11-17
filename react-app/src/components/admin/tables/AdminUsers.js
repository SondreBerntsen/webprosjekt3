import React, { Component } from "react";
import AdminUser from "../AdminUser";

class AdminUsers extends Component {
  state = {
    users: [],
    usersx: [
      {
        id: 1,
        userName: "mongol",
        email: "mongol@gmail.com",
        hashedPass: "topsecurity123",
        type: "journalist"
      },
      {
        id: 2,
        userName: "coolpeeper",
        email: "coolpeeper@gmail.com",
        hashedPass: "topsecurity1234",
        type: "somethingelseidk"
      }
    ]
  }
  componentDidMount() {
    this.getUserList();
  }
  getUserList = _ => {
    fetch(`http://localhost:5000/adminUsers`)
      .then(response => response.json())
      .then(response => this.setState({ users: response }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <button className="createNewBtn btn btn-sm btn-info" type="button" data-toggle="collapse" data-target='#newUserForm' aria-expanded="false" aria-controls='newUserForm'>Create new user</button>
        <div className="collapseForm col-12 collapse" id="newUserForm">
          <form className="col-md-8 col-lg-6">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="username123" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>Repeat password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="address@gmail.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                {/* This should be a dropdown with available user types, OR a checklist of operations the user will be granted access to */}
                <label>User type OR checklist of operations</label>
                <input type="text" className="form-control" placeholder="not sure wat" />
              </div>
            </div>
            <button type="submit" className="btn btn-info btn-sm">Submit</button>
          </form>
        </div>
        {
          this.state.users.map(user => (
            <AdminUser key={user.id} user={user} />
          ))
        }
      </div>
    );
  }
}

export default AdminUsers;
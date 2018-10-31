import React, {Component} from "react";
import AdminUser from "../AdminUser";

class AdminUsers extends Component {
  state = { 
    users: [
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
  render() { 
    return ( 
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <button className="createNewBtn btn btn-sm btn-info" type="button" data-toggle="collapse" data-target='#newUserForm' aria-expanded="false" aria-controls='newUserForm'>Create new user</button>
        <div className="collapseForm col-12 collapse" id="newUserForm">
          <form className="col-md-8 col-lg-6">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter event title" />
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
                <label>Price</label>
                <input type="number" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>Youtube link</label>
                <input type="text" className="form-control" />
              </div>

            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Image</label>
                <input type="file" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>Thumbnail</label>
                <input type="file" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label>Descrition</label>
              <textarea type="text" className="form-control" />
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
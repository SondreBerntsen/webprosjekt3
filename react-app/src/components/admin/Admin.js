import React, { Component } from "react";
import AdminTopNav from './AdminTopNav';
import AdminNav from './AdminNav';
import AdminLogin from './AdminLogin';
import "../../styles/adminNav.css";
import "../../styles/adminTables.css";
import "../../styles/adminLogin.css";

class Admin extends Component {
  state = {
    loggedIn: true //fix
  }
  render() {
    return (
      <React.Fragment>
        <AdminTopNav />
        {this.state.loggedIn ? <AdminNav className="adminNav" /> : <AdminLogin />}
      </React.Fragment>
    );
  }
}
export default Admin;

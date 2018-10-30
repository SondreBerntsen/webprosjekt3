import React, { Component } from "react";
import AdminTopNav from './AdminTopNav';
import AdminNav from './AdminNav';
import "../../styles/adminNav.css";
import "../../styles/adminTables.css";

class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <AdminTopNav />
        <AdminNav className="adminNav" />
      </React.Fragment>
    );
  }
}
export default Admin;

import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";


class AdminNav extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <ul>
          <li>
            <NavLink to="/admin/events">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/venues">
              Venues
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/schedule">
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/posts">
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default AdminNav;
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminNav from './AdminNav';

class Admin extends Component {
  render() {
    return (
      <AdminNav />
    );
  }
}

export default Admin;

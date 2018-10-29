import React from "react";
import { Link, NavLink } from "react-router-dom";


const AdminTopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navTopAdmin">
            <div className="container-fluid">
                <Link to="/"><img className="logoNav" src={require('../../img/logo.png')} alt="logo" /></Link>
                <button
                    className="navbar-toggler "
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/admin">
                                Profile
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/events">
                                Login
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default AdminTopNav;
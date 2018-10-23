import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav center">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Hjem
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/program">
                Program
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/om-oss">
                Om oss
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nyheter">
                Nyheter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tilbakeblikk">
                Tilbakeblikk
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/kontakt">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

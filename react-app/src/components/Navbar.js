import React from "react";
import { Link, NavLink } from "react-router-dom";


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
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/tilbakeblikk" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tilbakeblikk
              </NavLink>
              <div className="dropdown-menu divYearsNav" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item linkYear" to="/tilbakeblikk">2017</Link>
                <Link className="dropdown-item linkYear" to="/tilbakeblikk">2016</Link>
              </div>
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

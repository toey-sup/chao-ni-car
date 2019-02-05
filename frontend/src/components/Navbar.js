import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
const Navbar = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="logo">
        <img src={logo} alt="caonicar" />
      </div>
      <div className="space" />
      <div className="nav_item">
        <ul>
          <li>
            <a href="/">Manage Booking</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;

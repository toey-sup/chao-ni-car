import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "./logo.png";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <NavLink className={classes.Header} to="/">
        <img src={logo} style={{ width: 100, marginTop: -7 }} alt="logo" />
        CAO-NI-CAR
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className={classes.NavLink} to="/">
            Rent A Car
          </NavLink>
          <NavLink className={classes.NavLink} to="/about">
            About
          </NavLink>
          <NavLink className={classes.NavLink} to="/howtouse">
            How to use
          </NavLink>
        </Nav>
        <Form inline>
          <NavLink className={classes.NavLink} to="/login">
            <img src={logo} style={{ width: 100, marginTop: -7 }} alt="logo" />
          </NavLink>
          <NavLink className={classes.NavLink} to="/regis">
            Register
          </NavLink>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-danger">Search</Button> */}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

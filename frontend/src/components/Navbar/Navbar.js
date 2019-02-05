import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <NavLink className={classes.Header} to="/">Chao-Ni-Car</NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className={classes.NavLink} to="/">Rent A Car</NavLink>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="#link">How to use</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-danger">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

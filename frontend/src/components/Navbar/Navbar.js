import React, { Component } from "react";
import { Navbar, Nav, Form, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import logo from "./logo2.png";
import DropdownMenu from "react-bootstrap/DropdownMenu";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: null,
      name: undefined,
      email: undefined,
      response: null
    };
  }

  render() {
    const handleClickLogout = () => {
      window.location = "/api/logout";
    };

    let display = <p />;
    switch (this.props.user) {
      case null:
        console.log("null");
        break;
      case false:
        console.log("false");
        display = (
          <Form inline>
            <NavLink className={classes.NavLink} to="/regis">
              REGISTER
            </NavLink>
            <NavLink className={classes.NavLink} to="/login">
              LOGIN
            </NavLink>
          </Form>
        );
        break;
      default:
        console.log("Logout");
        display = (
          <Form inline>
            <Nav>
              <NavLink
                className={classes.NavLink}
                style={{
                  color: "yellow"
                }}
                to="/profile"
              >
                {this.props.user.name}
              </NavLink>
            </Nav>
            {this.props.user.isProvider ? (
              <Nav>
                <NavLink className={classes.NavLink} to="/carmanage">
                  CARMANAGE
                </NavLink>
              </Nav>
            ) : null}

            <Nav>
              <NavLink className={classes.NavLink} to="/managebooking">
                BOOKING
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                className={classes.NavLink}
                to="/"
                onClick={() => {
                  handleClickLogout();
                }}
              >
                LOGOUT
              </NavLink>
            </Nav>
          </Form>
        );
        /*
        menu = (
          <DropdownMenu>
            <Dropdown.Item href="/">HOME</Dropdown.Item>
            <Dropdown.Item href="/about">ABOUT</Dropdown.Item>
            <Dropdown.Item href="/howtouse">HOWTO</Dropdown.Item>
            {this.props.user.isProvider ? (
              <Dropdown.Item href="/carmanage">CARMANAGE</Dropdown.Item>
            ) : null}
            <Dropdown.Item href="/managebooking">BOOKING</Dropdown.Item>
            <Dropdown.Item href="/logout">LOGOUT</Dropdown.Item>
          </DropdownMenu>
        );
        */
        break;
    }
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={classes.Nav}
      >
        <Navbar.Brand href="/">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              style={{
                color: "white"
              }}
              href="/about"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              style={{
                color: "white"
              }}
              href="/howtouse"
            >
              HOWTO
            </Nav.Link>
          </Nav>
          <Nav>{display}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};

export default withRouter(connect(mapStateToProps)(NavbarComponent));

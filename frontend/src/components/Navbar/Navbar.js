import React, { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import logo from "./logo2.png";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: null,
      name: undefined,
      email: undefined,
      googleId: undefined,
      photo: undefined,
      isAuthenticated: undefined,
      response: null
    };
  }
  renderContent() {
    // axios
    //   .get("/api/current_user")
    //   .then(response => {
    //     console.log(response);
    //     if (response.data) {
    //       this.setState(
    //         {
    //           response: response,
    //           name: response.data.name,
    //           email: response.data.email,
    //           googleId: response.data.googleId,
    //           photo: response.data.photo,
    //           isAuthenticated: response.data.isAuthenticated,
    //           login: true
    //         },
    //         () => this.props.login(response.data)
    //       );
    //     } else {
    //       this.setState({
    //         login: false
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  render() {
    const handleClickLogout = () => {
      window.location = "/api/logout";
    };

    let display = <p></p>;
    switch(this.props.user) {
      case null:
        console.log("null")
        break;
      case false:
        console.log("false")
        display =  (
          <Form inline>
            <NavLink className={classes.NavLink} to="/regis">
              Register
            </NavLink>
            <NavLink className={classes.NavLink} to="/login">
              Login
            </NavLink>
          </Form>
        );
        break;
      default:
        console.log("Logout")
        display = (
          <Form inline>
            <p
              style={{
                marginTop: 17,
                color: "rgba(255, 255, 255, .5)",
                marginRight: 7
              }}
            >
              {this.props.user.name}
            </p>
            <Nav>
              <NavLink className={classes.NavLink} to="/booking">
                Manage Booking
              </NavLink>
            </Nav>
            <p
              className={classes.NavLink}
              onClick={() => {
                handleClickLogout();
              }}
              style={{ marginTop: 16, cursor: "pointer" }}
            >
              Logout
            </p>
          </Form>
        );
        break;
      }
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
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
            <NavLink  to="/">
              <img  className={classes.center} src={logo}/>
            </NavLink>
          </Nav>
          {display}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user
  }
};


export default withRouter(connect(mapStateToProps)(NavbarComponent));

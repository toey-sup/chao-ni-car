import React, { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "./logo.png";
import googleicon from "./googleicon.png";
import axios from "axios";
import * as actions from '../../store/actions/login';
import {connect} from 'react-redux';

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
  componentDidMount() {
    console.log("jb");
    axios
      .get("/api/current_user")
      .then(response => {
        console.log(response);
        if (response.data) {
          this.setState(
            {
              response: response,
              name: response.data.name,
              email: response.data.email,
              googleId: response.data.googleId,
              photo: response.data.photo,
              isAuthenticated: response.data.isAuthenticated,
              login: true
            },
            () => this.props.login(response.data)
          );
        } else {
          this.setState({
            login: false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const handleClickGoogle = () => {
      window.location = "/auth/google";
    };
    const handleClickPhoto = () => {
      window.location = "/api/current_user";
    };
    const handleClickLogout = () => {
      window.location = "/api/logout";
    };

    let display = <p></p>;
    if (this.state.login === false) {
      display = (
        <Form inline>
          {/* <img
            src={googleicon}
            style={{
              width: "30px",
              marginTop: -7,
              marginRight: 15,
              marginLeft: 15,
              cursor: "pointer"
            }}
            alt="login cao ni car"
            onClick={() => handleClickGoogle()}
          /> */}
          <NavLink className={classes.NavLink} to="/regis">
            Register
          </NavLink>
          <NavLink className={classes.NavLink} to="/login">
            Login
          </NavLink>
        </Form>
      );
    } else {
      display = (
        <Form inline>
          <p
            style={{
              marginTop: 17,
              color: "rgba(255, 255, 255, .5)",
              marginRight: 7
            }}
          >
            {this.state.name}
          </p>
          {/* <img
            src={this.state.photo}
            style={{
              width: "30px",
              marginTop: -7,
              marginRight: 15,
              marginLeft: 15,
              cursor: "pointer"
            }}
            alt="login cao ni car"
            onClick={() => handleClickPhoto()}
          /> */}
          <Nav>
            <NavLink className={classes.NavLink} to="/booking">
              Manage Booking
            </NavLink>
          </Nav>
          <p
            className={classes.NavLink}
            onClick={() => {
              handleClickLogout();
              this.props.logout();
            }}
            style={{ marginTop: 16, cursor: "pointer" }}
          >
            Logout
          </p>
        </Form>
      );
    }
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <NavLink className={classes.Header} to="/">
          <img src={logo} style={{ width: 100, marginTop: -7 }} alt="logo" />
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
          {display}
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-danger">Search</Button> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.login.auth,
    user: state.login.user
  }
};
const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(actions.storeLogin(user)),
    logout: ()=> dispatch(actions.storeLogout()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);

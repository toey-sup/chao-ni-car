import React, { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
              <NavLink className={classes.NavLink} to="/managebooking">
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
      <Navbar className={classes.Nav}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              flex: "1",
              alignItems: "center",
              justifyContent: "start"
            }}
          >
            <Nav>
              <NavLink className={classes.NavLink} to="/">
                HOME
              </NavLink>
              <NavLink className={classes.NavLink} to="/about">
                ABOUT
              </NavLink>
              <NavLink className={classes.NavLink} to="/howtouse">
                HOWTO
              </NavLink>
              
            </Nav>
          </div>
          <div
            style={{
              display: "flex",
              flex: "1",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <NavLink to="/">
              <img className={classes.center} src={logo} />
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              flex: "1",
              alignItems: "center",
              justifyContent: "flex-end"
            }}
          >
            {display}
          </div>
        </div>
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

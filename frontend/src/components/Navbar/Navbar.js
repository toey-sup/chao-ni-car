import React, { Component } from "react";
import { Navbar, Nav, Form,Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import logo from "./logo2.png";
import hamburger_icon from "./Hamburger_icon.png";
import DropdownMenu from "react-bootstrap/DropdownMenu";

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
    let menu = null;
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
        menu = (
          <DropdownMenu>
           <Dropdown.Item href="/">HOME</Dropdown.Item>
           <Dropdown.Item href="/about">ABOUT</Dropdown.Item>
           <Dropdown.Item href="/howtouse">HOWTO</Dropdown.Item>
           <Dropdown.Item href="/regis">REGISTER</Dropdown.Item>
           <Dropdown.Item href="/login">LOGIN</Dropdown.Item>
          </DropdownMenu>
        );
        
        break;
      default:
        console.log("Logout");
        display = (
          <Form inline>
            <p
              style={{
                marginTop: 17,
                color: "rgba(255,204,0,1)",
                marginRight: 7
              }}
            >
              {this.props.user.name}
            </p>
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
            <p
              className={classes.NavLink}
              onClick={() => {
                handleClickLogout();
              }}
              style={{ marginTop: 16, cursor: "pointer" }}
            >
              LOGOUT
            </p>
          </Form>
        );
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
           <div className={classes.display}>
              <Dropdown className ={classes.nav_dropdown}>
                 MENU
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                </Dropdown.Toggle>

        
                  {menu}
          
              </Dropdown>
            </div>
            <Nav className = {classes.hide}>

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
            <div className={classes.hide}>{display}</div>
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

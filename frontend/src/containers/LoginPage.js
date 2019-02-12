import React, { Component } from "react";
import axios from "axios";
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import '../components/Login/LoginComponent';
// import * as actions from '../store/actions/login';

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };
  loginHandler = e => {
    e.preventDefault();
    const data = { ...this.state }
    console.log(data)
    axios.post('/auth/login', data)
      .then(res => {
        console.log(res.user)
        window.location = '/'
      })
      .catch(err => console.log(err)) // Handle Login failed
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.loginHandler}>
          <img
            className="circle"
            src="https://www.telegraph.co.uk/content/dam/news/2017/11/22/TELEMMGLPICT000147365976_trans_NvBQzQNjv4Bq3XmyF3YIL3K1caQxZsZv2Ssm-UOV8_Q90I8_c5Af0yY.jpeg?imwidth=1400"
            alt="logo"
            width="100"
            height="100"
          />
          <p className="center_text">MEMBER LOGIN</p>
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            variant="danger"
            bsSize="large"
            style={{ width: "40%", margin: "0 auto" }}
            // disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <p>Need an account ? </p>
          <Link to="/About">Sign Up</Link>
        </form>
      </div>
    );
  }
}


export default withRouter(LoginPage);

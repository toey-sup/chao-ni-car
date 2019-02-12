import React, { Component } from "react";
import axios from "axios";
import {
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Form
} from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import "../components/Login/LoginComponent";
class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    validated: false
  };
  loginHandler = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    this.setState({ validated: true });
    const data = { ...this.state };
    if (form.checkValidity()) {
      axios
      .post("/auth/login", data)
      .then(res => {
        console.log(res.user);
        window.location = "/";
      })
      .catch(err => console.log(err)); // Handle Login failed
    }
    
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { validated } = this.state;
    return (
      <div className="Login">
        <Form onSubmit={this.loginHandler} noValidate validated={validated}>
          <img
            className="circle"
            src="https://www.telegraph.co.uk/content/dam/news/2017/11/22/TELEMMGLPICT000147365976_trans_NvBQzQNjv4Bq3XmyF3YIL3K1caQxZsZv2Ssm-UOV8_Q90I8_c5Af0yY.jpeg?imwidth=1400"
            width="100"
            height="100"
          />
          <p className="center_text">MEMBER LOGIN</p>
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              required
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              required
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
        </Form>
      </div>
    );
  }
}

export default withRouter(LoginPage);

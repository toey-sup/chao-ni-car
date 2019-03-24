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
import Userimg from "../images/user.png";
import "../components/Login/LoginComponent";
class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    validated: false,
    faillogin: false,
    failmessage: "No User ID or Password"
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
        .catch(e => {
          this.setState({
            faillogin: true
          });
        }); // Handle Login failed
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
    <div className ="loginbackground">
      <div class="wrapper fadeInDown">
  <div id="formContent">
 
    <h4 class="active"> LOG IN </h4>


    <div class="fadeIn first">
      <img src={Userimg} />
    </div>


    <form>
      <input type="text" id="username" class="fadeIn second" name="login" placeholder="login" onChange={this.handleChange}/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" onChange={this.handleChange}/>
      <input type="submit" class="fadeIn fourth" value="Log In" onClick={this.loginHandler}/>
    </form>


    <div id="formFooter">
    <a class="inactive underlineHover" href = "/regis">Sign Up </a>
    </div>

  </div>
</div>
</div>
      /*
    <div className="loginbackground">
      <div className="Login" className="wrapper fadeInDown">
        <Form onSubmit={this.loginHandler} noValidate validated={validated}>
          <img
            className="circle"
            src="https://www.telegraph.co.uk/content/dam/news/2017/11/22/TELEMMGLPICT000147365976_trans_NvBQzQNjv4Bq3XmyF3YIL3K1caQxZsZv2Ssm-UOV8_Q90I8_c5Af0yY.jpeg?imwidth=1400"
            width="100"
            height="100"
          />
          <p className="center_text">MEMBER LOGIN</p>
          <FormGroup controlId="username" size="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              required
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" size="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              required
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          {this.state.faillogin && (
            <span className="errorMessage">{this.state.failmessage}</span>
          )}
          <Button
            block
            variant="danger"
            size="large"
            style={{ width: "40%", margin: "0 auto" }}
            // disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <p>Need an account ? </p>
          <Link to="/regis">Sign Up</Link>
        </Form>
      </div>
      </div>
      */
    );
  }
}

export default withRouter(LoginPage);

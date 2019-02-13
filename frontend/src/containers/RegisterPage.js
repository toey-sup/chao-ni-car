import React, { Component } from "react";
import { Button, Form, Row, Col, FormGroup, Modal } from "react-bootstrap";
import "./RegisterPage.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Input from "../components/Input/Input";
class RegisterPage extends Component {
  state = {
    confirming: false,
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    id: "",
    drivingnumber: "",
    tel: "",
    validated: false,
    formvalid: null,
    stage: false,
    chosen: false,
    show: false
  };
  getValidationState(value) {
    const length = value.length;
    if (length > 0) return "success";
    else if (length === 0) return "error";
    return null;
  }
  handletoggle() {
    this.setState({ show: !this.state.show });
  }
  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    //this.checkValidity(event.target.value,event.target.id)
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      idCardNum: this.state.id,
      DLicenseNumber: this.state.drivingnumber,
      tel: this.state.tel,
      isAuthenticated: true
    };
    axios
      .post("/auth/local", data)
      .then(res => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ loading: false });
  };
  render() {
    const handleClickrenter = () => {
      this.setState({
        chosen: true,
        renter: true
      });
    };
    const handleClickuser = () => {
      this.setState({
        chosen: true,
        user: true
      });
    };

    let display = <p />;
    let user = <p />;

    if (this.state.user === true) {
      user = (
        <Form.Group controlId="drivingnumber" style={{ paddingBottom: "5px" }}>
          <Form.Label>Driving Number</Form.Label>
          <Form.Control
            type="drivingnumber"
            placeholder="Enter your Driving number"
            required
            onChange={this.handleChange}
          />
        </Form.Group>
      );
    }

    if (this.state.chosen === true) {
      display = (
        <div className="wrapper">
          <Form onSubmit={e => this.handleSubmit(e)} validated={false}>
            <Form.Row style={{ paddingBottom: "5px" }}>
              <Form.Group as={Col} controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter your name"
                  onChange={this.handleChange}
                  isValid={false}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="surname"
                  required
                  placeholder="Enter your surname"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="email" style={{ paddingBottom: "5px" }}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Email.123@caonicar.com"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="username" style={{ paddingBottom: "5px" }}>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                required
                placeholder="Username"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Row style={{ paddingBottom: "5px" }}>
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password again"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="id" style={{ paddingBottom: "5px" }}>
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                type="idnumber"
                placeholder="Enter your ID number"
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            {user}
            <Form.Group controlId="tel" style={{ paddingBottom: "5px" }}>
              <Form.Label>Telephone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your telephone number"
                required
                onChange={this.handleChange}
              />
            </Form.Group>

            <div className="buttonwrapper">
              <label>I agree to the Terms and Agreements</label>
              <Form.Group controliId="termcheck">
                <Form.Check
                  onChange={() => this.handletoggle()}
                  type="checkbox"
                  required
                />
              </Form.Group>
              <Button
                variant="outline-secondary"
                type="cancel"
                className="cancelbutton"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  this.props.history.push("/");
                }}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="submitbutton"
                onClick={() => {
                  this.setState({ validated: true });
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
          <Modal show={this.state.show} onHide={this.handletoggle}>
            <Modal.Header closeButton>
              <Modal.Title>Agreement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This Registration Rights Agreement (this “Agreement”) is made and
              entered into as of December __, 2015 between KaloBios
              Pharmaceuticals, Inc., a Delaware corporation (the “Company”), and
              each of the several purchasers signatory hereto (each such
              purchaser, a “Purchaser” and, collectively, the “Purchasers”).
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handletoggle()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    } else {
      display = (
        <div
          className="choseImage"
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch"
          }}
        >
          <div className="renter" onClick={() => handleClickrenter()}>
            <div className="rentertext">
              <p>RENTER</p>
            </div>
          </div>
          <div className="user" onClick={() => handleClickuser()}>
            <div className="usertext">
              <p>USER</p>
            </div>
          </div>
        </div>
      );
    }

    return <div>{display}</div>;
  }
}

export default RegisterPage;

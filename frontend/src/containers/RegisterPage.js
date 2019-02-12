import React, { Component } from "react";
import { Button, Form, Row, Col, FormGroup,Modal } from "react-bootstrap";
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
    show: false,
    validated: false
  };
  getValidationState(value) {
    const length = value.length;
    if (length > 0) return 'success';
    else if (length === 0) return 'error';
    return null;
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  validateid() {
    return this.state.id.length === 13;
  }

  validatetel() {
    return this.state.tel.length === 10;
  }

  validatepassword() {
    return this.state.password === this.state.confirmpassword;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    //this.checkValidity(event.target.value,event.target.id)
  };

  handleSubmit = (event) => {
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
        //this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { validatepassword } = this.validatepassword;
    return (
      <div>
        <div className="wrapper">
          <Form
            onSubmit={e => this.handleSubmit(e)}
            validated={this.state.validated}
          >
            <Form.Row>
              <Form.Group as={Col} controlId="name" >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter your name"
                  onChange={this.handleChange}
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

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Email.123@caonicar.com"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                required
                placeholder="Username"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Row>
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
                  validated={validatepassword}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="id">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                type="idnumber"
                placeholder="Enter your ID number"
                required
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="drivingnumber">
              <Form.Label>Driving Number</Form.Label>
              <Form.Control
                type="drivingnumber"
                placeholder="Enter your Driving number"
                required
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="tel">
              <Form.Label>Telephone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your telephone number"
                required
                onChange={this.handleChange}
              />
            </Form.Group>

            <div className="buttonwrapper">
              <Form.Group id="termcheck">
                <Form.Check 
                  onChange={()=> this.setState({show:true})}
                  type="checkbox"
                  label="I agree to the Terms and Agreements"
                  required
                />
              </Form.Group>
              <Button
                variant="outline-secondary"
                type="cancel"
                className="cancelbutton"
              >
                Cancel
                </Button>
              <Button variant="primary" type="submit" className="submitbutton" onClick={() => { this.setState({ validated: true }); }}>
                Submit
                </Button>
            </div>
          </Form>
          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agreement</Modal.Title>
          </Modal.Header>
          <Modal.Body>This Registration Rights Agreement (this “Agreement”) is made and entered into as of December __, 2015 between KaloBios Pharmaceuticals, Inc., a Delaware corporation (the “Company”), and each of the several purchasers signatory hereto (each such purchaser, a “Purchaser” and, collectively, the “Purchasers”).</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"  onClick={()=> this.setState({show:false})}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    );
  }
}

export default RegisterPage;

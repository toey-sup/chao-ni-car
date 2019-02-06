import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import "./RegisterPage.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      id: "",
      drivingnumber: "",
      tel: "",
      validated: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
    }
    this.setState({ validated: true });
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
  }

  render() {
    const { validated } = this.state;

    return (
      <div>
        <div className="wrapper">
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} controlId="name">
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
              <div className="term">
                <Form.Group id="termcheck">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the Terms and Agreements"
                    required
                    className="checkbox"
                    style={{ textAlign: "center" }}
                  />
                </Form.Group>
              </div>
              <Button
                variant="outline-secondary"
                type="cancel"
                className="cancelbutton"
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit" className="submitbutton">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;

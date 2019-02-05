import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import "./RegisterPage.css";

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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;

    return (
      <div>
        <div className="wrapper">
          <Form
            method="post"
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
            <Form.Group id="termcheck">
              <Form.Check
                type="checkbox"
                label="I agree to the Terms and Agreements"
                required
                className="checkbox"
              />
            </Form.Group>
            <div className="buttonwrapper">
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
          ;
        </div>
      </div>
    );
  }
}

export default RegisterPage;

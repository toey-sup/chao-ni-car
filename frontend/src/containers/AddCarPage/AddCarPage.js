import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import FieldUploadFile from "../../components/FieldFileInput/FieldUploadFile";
import classes from "./AddCarPage.module.css";
import DatePicker from "react-datepicker";
class AddCarPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      type: "",
      regYear: "",
      seat: "",
      transmission: "",
      price: "",
      equipment: "",
      lnumber: "",
      availFrom: "",
      availTo: "",
      location: "",
      description: "",
      deposit: "",
      validated: false,
      fileUrl: null
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("kuy");
      event.stopPropagation();
    }
    if (this.state.fileUrl == null) {
      event.stopPropagation();
    }
    this.setState({ validated: true });
    const data = {
      brand: this.state.brand,
      type: this.state.type,
      seat: this.state.seat,
      regYear: this.state.regYear,
      gear: this.state.transmission,
      equipment: this.state.equipment,
      LNumber: this.state.lnumber,
      availFrom: this.state.availFrom,
      availTo: this.state.availTo,
      location: this.state.location,
      description: this.state.description,
      deposit: this.state.deposit,
      pricePerDay: this.state.pricePerDay,
      photo: this.state.fileUrl
    };
    console.log(data);
    axios
      .post("/api/cars", data)
      .then(res => {
        console.log(res);
        this.props.history.push("/carmanage");
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  addFileURLToState = fileUrl => {
    this.setState({
      fileUrl: fileUrl
    });
  };
  render() {
    const { validated } = this.state;
    return (
      <div className={classes.addcarbackground}>
        <div className={classes.wrapper}>
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <h1>Add Car</h1>
            <Row>
              <Col>
                <FieldUploadFile
                  classname={classes.uploadimgwrapper}
                  addFileURLToState={this.addFileURLToState}
                />
              </Col>
              <Col>
                <Form.Row>
                  <Form.Group as={Col} controlId="brand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                      required
                      type="String"
                      placeholder="Enter Brand"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="type">
                    <Form.Label>type</Form.Label>
                    <Form.Control
                      required
                      type="String"
                      placeholder="Enter type"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="regYear">
                    <Form.Label>Register Year</Form.Label>
                    <Form.Control
                      required
                      type="String"
                      placeholder="Enter Register Year"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>

                {/* <Form.Row>
                <Form.Group as={Col} controlId="pickupPlace">
                <Form.Label>Pick Up Place</Form.Label>
                  <div key={`default-${"checkbox"}`} className="mb-3">
                    <Form.Check type={"checkbox"} id="Suwanabumi" label="555" />
                  </div>
                  <div key={`default-${"checkbox"}`} className="mb-3">
                    <Form.Check type={"checkbox"} id="Suwanabumi" label="555" />
                  </div>
                  <div key={`default-${"checkbox"}`} className="mb-3">
                    <Form.Check type={"checkbox"} id="Suwanabumi" label="555" />
                  </div>
                </Form.Group>
              </Form.Row> */}
              </Col>
            </Row>
            <Form.Row>
              <Form.Group as={Col} controlId="deposit">
                <Form.Label>Deposit</Form.Label>
                <Form.Control
                  required
                  type="Number"
                  placeholder="Enter deposit"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="pricePerDay">
                <Form.Label>Price per day</Form.Label>
                <Form.Control
                  required
                  type="Number"
                  placeholder="Enter pricePerDay"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="seat">
                <Form.Label>Seat</Form.Label>
                <Form.Control
                  required
                  type="Number"
                  placeholder="Enter Seat"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lnumber">
                <Form.Label>License number</Form.Label>
                <Form.Control
                  required
                  type="String"
                  placeholder="License number"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control as="select" onChange={this.handleChange}>
                  <option>Select</option>
                  <option value="Suvarnabhumi Airport">
                    Suvarnabhumi Airport
                  </option>
                  <option value="Don Mueang Airport">Don Mueang Airport</option>
                  <option value="BTS Morchit">BTS Morchit</option>
                  <option value="BTS Siam">BTS Siam</option>
                  <option value="BTS Asok">BTS Asok</option>
                  <option value="BTS Onnut">BTS Onnut</option>
                  <option value="BTS Bang Wa">BTS Bang Wa</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="transmission">
                <Form.Label>Transmission</Form.Label>
                <Form.Control as="select" onChange={this.handleChange}>
                  <option>Select</option>
                  <option value="manual">Manual</option>
                  <option value="auto">Auto</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  type="String"
                  placeholder="Description"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="equipment">
                <Form.Label>Equipment</Form.Label>
                <Form.Control
                  required
                  type="String"
                  placeholder="Enter Equipment"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="availFrom">
                <Form.Label>available from</Form.Label>
                <Form.Control
                  required
                  type="Date"
                  placeholder="Enter available date from"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="availTo">
                <Form.Label>available to</Form.Label>
                <Form.Control
                  required
                  type="Date"
                  placeholder="Enter available date to"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row className={classes.buttonwrapper}>
              <button className={classes.submit} type="submit">
                Submit
              </button>
            </Form.Row>
          </Form>
        </div>
      </div>
    );
  }
}
export default AddCarPage;

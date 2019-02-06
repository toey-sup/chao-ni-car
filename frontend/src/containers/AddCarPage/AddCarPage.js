import React, { Component } from 'react';
import { Button, Form, Col, Row, Image, Dropdown } from "react-bootstrap";
import axios from "axios";
class AddCarPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: "",
            type:"",
            regYear:"",
            seat: "",
            transmission: "",
            price: "",
            equipment:"",
            lnumber:"",
            availFrom:"",
            availTo:"",
            description:"",
            deposit:"",
            validated: false
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          
          event.stopPropagation();
        }
        this.setState({ validated: true });
        const data = {
          brand: this.state.brand,
          seat: this.state.seat,
          regYear:this.state.regYear,
          transmission: this.state.transmission,
          price: this.state.price,
          equipment: this.state.equipment,
          lnumber: this.state.lnumber,
          availFrom:this.state.availFrom,
          availTo:this.state.availTo,
          description:this.state.description,
          deposit:this.state.deposit,
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
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };
    render() {
        const { validated } = this.state;
        return (
            <div className="wrapper" >
            <p>{this.state.transmission}</p>
            <Form
                noValidate
                validated={validated}
                onSubmit={e => this.handleSubmit(e)}
            >
                <Row>
                    <Col>
                        <Image style={{ width: 400, height: 400 }} src='http://simpleicon.com/wp-content/uploads/cloud-upload-2.png' />
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
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId=" transmission">
                            <Form.Label> Transmission</Form.Label>
                             <Form.Control as="select" onChange={this.handleChange}>
                                  <option>Select</option>
                                  <option>Manual</option>
                                  <option>Auto</option>
                            </Form.Control>
                         </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    required
                                    type="Number"
                                    placeholder="Enter Price"
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
                            <Form.Group as={Col} controlId="deposit">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    required
                                    type="Number"
                                    placeholder="Enter deposit"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Row>
                           <Button>Cancle</Button>
                           <Button type = 'submit'>Submit</Button>
                        </Row>

                        

                
                    </Col>
                    
                </Row>
                </Form>

                
            </div>
        );
    }
}
export default AddCarPage
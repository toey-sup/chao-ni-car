import React, { Component } from 'react';
import { Button, Form, Col, Row, Image, Dropdown } from "react-bootstrap";
import axios from "axios";
class AddCarPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: "",
            seat: "",
            transmission: "",
            price: "",
            equipment:"",
            lnumber:"",
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
          transmission: this.state.transmission,
          price: this.state.price,
          equipment: this.state.equipment,
          lnumber: this.state.lnumber,
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
                                    type="brand"
                                    placeholder="Enter Brand"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="seat">
                                <Form.Label>Seat</Form.Label>
                                <Form.Control
                                    required
                                    type="seat"
                                    placeholder="Enter Seat"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="transmission">
                                <Form.Label>Transmission</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                          {this.state.transmission}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onChange={this.handleChange}>Manual</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" onChange={this.handleChange}>Auto</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                             </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    required
                                    type="Price"
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
                                    type="Equipment"
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
                                    type="Lnumber"
                                    placeholder="License number"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>
                    </Col>
                    
                </Row>
                <div>
                <Row>
                    <Button>Cancle</Button>
                    <Button type = 'submit'>Submit</Button>
                </Row>
                </div>
                </Form>

                
            </div>
        );
    }
}
export default AddCarPage
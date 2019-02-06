import React, { Component } from 'react';
import { Button, Form, Col, Row, Image, Dropdown } from "react-bootstrap";
class AddCarPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Brand: "",
            Seat: "",
            Transmission: "",
            Price: "",
            Equipment:"",
            Lnumber:"",
            validated: false
        };
    }
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };
    render() {
        return (
            <div className="wrapper" >
                <Row>
                    <Col>
                        <Image style={{ width: 400, height: 400 }} src='http://simpleicon.com/wp-content/uploads/cloud-upload-2.png' />
                    </Col>
                    <Col>

                        <Form.Row>
                            <Form.Group as={Col} controlId="Brand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    required
                                    type="Brand"
                                    placeholder="Enter Brand"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="Seat">
                                <Form.Label>Seat</Form.Label>
                                <Form.Control
                                    required
                                    type="Seat"
                                    placeholder="Enter Seat"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="Transmission">
                                <Form.Label>Transmission</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Select Transmission
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onChange={this.handleChange}>Manual</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" onChange={this.handleChange}>Auto</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                             </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="Price">
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
                            <Form.Group as={Col} controlId="Equipment">
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
                            <Form.Group as={Col} controlId="Lnumber">
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
                <Row>
                    <Button>Cancle</Button>
                    <Button>Submit</Button>
                </Row>
            </div>
        );
    }
}
export default AddCarPage
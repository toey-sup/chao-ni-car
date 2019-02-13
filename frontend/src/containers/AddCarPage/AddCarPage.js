import React, { Component } from 'react';
import { Button, Form, Col, Row, Image, Dropdown } from "react-bootstrap";
import axios from "axios";
import FieldUploadFile from '../../components/FieldFileInput/FieldUploadFile'
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
            validated: false,
            fileUrl: null
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
          type: this.state.type,
          seat: this.state.seat,
          regYear:this.state.regYear,
          gear: this.state.transmission,
          equipment: this.state.equipment,
          LNumber: this.state.lnumber,
          availFrom:this.state.availFrom,
          availTo:this.state.availTo,
          description:this.state.description,
          deposit:this.state.deposit,
          pricePerDay:this.state.pricePerDay,
          photo: this.state.fileUrl
        };
        console.log(data)
        axios
          .post("/api/cars", data)
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
      addFileURLToState = (fileUrl) => {
        this.setState({
            fileUrl: fileUrl
        })
      }
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
                        <FieldUploadFile addFileURLToState={this.addFileURLToState}/>
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
                                  <option value="">Select</option>
                                  <option>Manual</option>
                                  <option>Auto</option>
                            </Form.Control>
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
                                <Form.Label>deposit</Form.Label>
                                <Form.Control
                                    required
                                    type="Number"
                                    placeholder="Enter deposit"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
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
                        <Row>
                           <Button>Cancel</Button>
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
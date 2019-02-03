import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
class testPage extends Component {
    state = {
        loading: false,
        cars: null
    }
    async componentDidMount() {
        const res = await axios.get('/api/cars')
        console.log(res.data)
        this.setState({
            cars: res.data
        })
    }
    submitCar1 = async () => {
        const car = {
            brand: "lambogini",
            type: "c8",
            regYear: "1997",
            LNumber: "ก123",
            gear: "auto",
            seat: 2,
            equipment: "55",
            status: "avail",
            photo: "SDFSDFASDFDASF",
            availFrom: new Date("2017-03-25"),
            availTo: new Date("2018-03-25"),
            description: "DSFGGHFGHGFHGF",
        }
        const res = await axios.post('/test/create_car', car);
        console.log(res.data)
    }
    submitCar2 = async () => {
        const car = {
            brand: "izuzu",
            type: "toro",
            regYear: "1997",
            LNumber: "yualll",
            gear: "auto",
            seat: 2,
            equipment: "GPS",
            status: "avail",
            photo: "SDFSDFASDFDASF",
            availFrom: new Date(),
            availTo: new Date(),
            description: "dsfdsfsdfasfasf",
        }
        const res = await axios.post('/test/create_car', car);
        console.log(res.data)
    }
    deleteCar = async (id) => {

        console.log(id)
        const res = await axios.delete('/api/cars/' + id);
        console.log(res)
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log()
    }
    searchHandler = async () => {
        const numSeat = 5;
        const brand = 'toyota';
        const res = await axios.get('/api/cars?brand=' + brand)
        console.log(res.data)
    }

    render() {
        let carQuery = <p>Unknown</p>
        if (this.state.cars) {
            carQuery = this.state.cars.map(carObj => {
                //console.log(carObj)
                var keysAndValues = [];
                for (var key in carObj) {
                    if (carObj.hasOwnProperty(key)) keysAndValues.push(
                        <div>
                            <p key={key + carObj}>{key} : {carObj[key]}</p>

                        </div>

                    );
                }
                keysAndValues.push(<Button onClick={() => this.deleteCar(carObj["_id"])}>Delete this Car</Button>)
                keysAndValues.push(<p>--------------------------------------------------------------------</p>)
                return keysAndValues
            })
        }

        return (
            <div>
                {/*<Form onSubmit={this.submitHandler}>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="brand" placeholder="Enter brand" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="type" placeholder="type" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>*/}
                <Button onClick={this.submitCar1}>Mock1</Button>
                <Button onClick={this.submitCar2}>Mock2</Button>
                <Button onClick={this.searchHandler}>Search</Button>
                {carQuery}
            </div>
        )
    }
}

export default testPage

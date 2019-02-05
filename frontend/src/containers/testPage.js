import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import FieldFileInput from '../components/FieldFileInput/FieldFileInput'
class testPage extends Component {
    state = {
        loading: false,
        cars: null,
        username: '',
        password: ''
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
            deposit: 3000,
            pricePerDay: 300
        }
        const res = await axios.post('/api/cars', car);
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
        const res = await axios.post('/api/cars', car);
        if (res.data.redirect === '/authentication') {
            this.props.history.push('/authentication')
        }
        console.log(res.data)
    }
    createRequest = async (id) => {
        const request = {
            placeFrom: "Asok",
            placeTo: "Siam",
            dateFrom: new Date("01-02-07"),
            dateTo: new Date("02-03-07"),
            carId: id
        }
        const res = await axios.post('/api/request', request);
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
        const res = await axios.get('/api/cars')
        if (res.data.redirect === '/authentication') {
            window.location = '/authentication'
        }
        console.log(res.data)
        this.setState({
            cars: res.data
        })
    }
    handleUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    }
    registerHandler = (e) => {
        e.preventDefault()
        const data = {
            username : this.state.username, 
            password: this.state.password
        }
        axios.post('/auth/local', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    loginHandler = (e) => {
        e.preventDefault()
        const data = {
            username : this.state.username, 
            password: this.state.password
        }
        axios.post('/auth/login', data)
            .then((res) => {
                window.location = "/"
            })
            .catch(err => console.log(err))
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
                keysAndValues.push(<Button onClick={() => this.createRequest(carObj["_id"])}>Want this Car</Button>)
                keysAndValues.push(<p>--------------------------------------------------------------------</p>)
                return keysAndValues
            })
        }

        return (
            <div>
                <Form onSubmit={this.registerHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username address</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" 
                        value={this.state.username} onChange={this.handleUsername}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        value={this.state.password} onChange={this.handlePasswordChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Form onSubmit={this.loginHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username address</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" 
                        value={this.state.username} onChange={this.handleUsername}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        value={this.state.password} onChange={this.handlePasswordChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {/* <FieldFileInput /> */}

                {/* <Button onClick={this.submitCar1}>Mock1</Button>
                <Button onClick={this.submitCar2}>Mock2</Button>
                <Button onClick={this.searchHandler}>Search</Button>
                {carQuery} */}
            </div >
        )
    }
}

export default withRouter(testPage)

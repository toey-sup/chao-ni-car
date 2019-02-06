import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import FieldFileInput from '../components/FieldFileInput/FieldFileInput'

class testPage extends Component {
    state = {
        loading: false,
        cars: null
    }
    submitCar1 = async () => {
        const car = {
            brand: "Honda",
            type: "Civic",
            regYear: "1997",
            LNumber: "ก123",
            gear: "auto",
            seat: 2,
            equipment: "55",
            status: "avail",
            photo: "https://automobiles.honda.com/platform/api/v3/images/exterior/02?config=M:FC1F9KKNW$EC:NH-731P$HC:undefined$IC:BK&width=358&filetype=png&background=0",
            availFrom: new Date("2019-02-10"),
            availTo: new Date("2019-02-20"),
            description: "DSFGGHFGHGFHGF",
            deposit: 3000,
            pricePerDay: 300
        }
        const res = await axios.post('/api/cars', car);
        console.log(res.data)
    }
    
    createRequest = async (id) => {
        const request = {
            fromLoc: "Asok",
            toLoc: "Siam",
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


                <FieldFileInput />

                <Button onClick={this.submitCar1}>Mock1</Button>
                <Button onClick={this.searchHandler}>Search</Button>
                {carQuery}
            </div>
        )
    }
}

export default withRouter(testPage)

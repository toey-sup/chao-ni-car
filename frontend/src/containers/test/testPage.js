import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import FieldUploadFile from '../../components/FieldFileInput/FieldUploadFile'

class testPage extends Component {
    state = {
        loading: false,
        cars: null,
        requests: null,
        fileUrl: null
    }
    componentDidMount = () => {
        axios.get('/api/cars')
            .then( res => {
                console.log(res.data)
                this.setState({
                    cars: res.data
                })
            })
        axios.get('/api/request')
            .then( res => {
                console.log(res.data)
                this.setState({
                    requests: res.data
                })
            })
    }
    submitCar1 = async () => {
        try{
            const car = {
                brand: "Test",
                type: "Car",
                regYear: "1997",
                LNumber: "ก123",
                gear: "auto",
                seat: 2,
                equipment: "55",
                status: "avail",
                photo: this.state.fileUrl,
                availFrom: new Date("2019-02-10"),
                availTo: new Date("2019-02-20"),
                description: "DSFGGHFGHGFHGF",
                deposit: 3000,
                pricePerDay: 300
            }
            const res = await axios.post('/api/cars', car);
            console.log(res.data)

        } catch(e) {
            console.log(e)
        }
        
        
        
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

    cancelRequest = async (id) => {
        const res = axios.delete('/api/request/' + id)
        console.log(res)
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
    
    addFileURLToState = (fileUrl) => {
        this.setState({
            fileUrl: fileUrl
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
                
                if (carObj["isRented"]) {
                    keysAndValues.push(<Button>Booked</Button>)
                } else {
                    keysAndValues.push(<Button onClick={() => this.createRequest(carObj["_id"])}>Book this Car</Button>)
                }
                keysAndValues.push(<p>--------------------------------------------------------------------</p>)
                return keysAndValues
            })
        }
        let requests = <p>request Unknown</p>
        if (this.state.requests) {
            requests = this.state.requests.map(requestObj => {
                var requestList = [];
                for(var key in requestObj) {
                    if (requestObj.hasOwnProperty(key)) requestList.push(
                        <div>
                            <p key={key + requestObj}>{key} : {requestObj[key]}</p>

                        </div>

                    );
                }
                requestList.push(<Button onClick={() => this.cancelRequest(requestObj["_id"])}>Cancel this Car</Button>)
                return requestList
            })
        }

        return (
            <div>


                <FieldUploadFile sendHandler={this.sendHandler} addFileURLToState={this.addFileURLToState}/>

                <Button onClick={this.submitCar1}>Mock1</Button>
                {carQuery}
                {requests}
            </div>
        )
    }
}

export default withRouter(testPage)

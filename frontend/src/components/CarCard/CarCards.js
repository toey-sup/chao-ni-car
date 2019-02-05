import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CarCard from './CarCard';

const carCards = (props) => {
    //props.cars แล้ว map ไปเป็น card แต่ละใบ
    const dummyData = [{
        id: '1',
        brand: "car1",
        type: 'RX1',
        description: "xxxasfjapownceyrtvwnoperuvnwpoutvnpoewr"
    }, {
        id: '2',
        brand: "car2",
        type: 'RX1',
        description: "xxxasfjapownceyrtvwnoperuvnwpoutvnpoewr"
    }, {
        id: '3',
        brand: "car3",
        type: 'RX1',
        description: "xxxasfjapownceyrtvwnoperuvnwacfjvopnervropoutvnpoewr"
    }, {
        id: '4',
        brand: "car4",
        type: 'RX1',
        description: "Not thing"
    }, {
        id: '5',
        brand: "car5",
        type: 'RX1',
        description: "xxxasfjapownceyrtvwnoperuvnwacfjvopnervropoutvnpoewr"
    }, {
        id: '6',
        brand: "car6",
        type: 'RX1',
        description: "xxxasfjapownceyrtvwnoperuvnwacfjvopnervropoutvnpoewr"
    }].map((item) => {
        return <Col key={item.id} xs={12} sm={4} md={3}><CarCard id={item.id} brand={item.brand} type={item.type} description={item.description} /></Col>
    })

    let cars = <strong>Please Enter something</strong>
    if (props.cars.length > 0) {
        cars = props.cars.map((item, index) => { //Delete index after 
            return <Col key={item.id + String(index)} xs={12} sm={5} md={4} lg={3}><CarCard id={item._id} brand={item.brand} type={item.type} description={item.description} /></Col>
        })
    }

    return (
        <Row>
            {cars}
        </Row>
    );
}

export default carCards;
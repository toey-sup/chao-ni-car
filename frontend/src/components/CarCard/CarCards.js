import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CarCard from './CarCard';

const carCards = (props) => {
    //props.cars แล้ว map ไปเป็น card แต่ละใบ
    const dummyData = [{
        id:1,
        title: "car1",
        description: "xxxasfjapownceyrtvwnoperuvnwpoutvnpoewr"
    }, {
        id:2,
        title: "car2",
        description: "xxxasfjapownceyrtvwnoperuvnwpoutvnpoewr"
    }, {
        id:3,
        title: "car3",
        description: "xxxasfjapownceyrtvwnoperuvnwacfjvopnervropoutvnpoewr"
    }, {
        id:4,
        title: "car4",
        description: "Not thing"
    }, {
        id:5,
        title: "car5",
        description: "xxxasfjapownceyrtvwnoperuvnwacfjvopnervropoutvnpoewr"
    }, {
        id:6,
        title: "car6",
        description: "xxxasfjapownceyrtvwnoperuvnwacfjvopnervropoutvnpoewr"
    }].map((item) => {
        return <Col xs={12} sm={4} md={3}><CarCard key={item.id} id={item.id} title={item.title} description={item.description} /></Col>
    })
    return (
        <Row>
            {dummyData}
        </Row>
    );
}

export default carCards;
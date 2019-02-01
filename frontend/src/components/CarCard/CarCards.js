import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CarCard from './CarCard';

const carCards = (props) => {
    //props.cars แล้ว map ไปเป็น card แต่ละใบ
    const dummyData = [{
        title: "car1",
        description: "xxxasfjapownceyrtvwnoperuvnwpoutvnpoewr"
    }, {
        title: "car2",
        description: "xxxasfjapownceyrtvwnoperuvnwpoutvnpoewr"
    }, {
        title: "car3",
        description: "xxxasfjapownceyrtvwnoperuvnwacfjvopnervropoutvnpoewr"
    }, {
        title: "car4",
        description: "Not thing"
    }, {
        title: "car5",
        description: "xxxasfjapownceyrtvwnoperuvnwacfjvopnervropoutvnpoewr"
    }, {
        title: "car6",
        description: "xxxasfjapownceyrtvwnoperuvnwacfjvopnervropoutvnpoewr"
    }].map((item) => {
        return <Col xs={12} sm={4} md={3}><CarCard key={item.tile} title={item.title} description={item.description} /></Col>
    })
    return (
        <Row>
            {dummyData}
        </Row>
    );
}

export default carCards;
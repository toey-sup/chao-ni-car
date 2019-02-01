import React from 'react';
import { Col,Row } from 'react-bootstrap';
import CarCard from './CarCard';

const carCards = (props) => {
    //props.cars แล้ว map ไปเป็น card แต่ละใบ
    return (
        <Row>
            <Col sm={3}><CarCard title="car1" description="XXXXXXXXXXXXXsfskdkgjhpjeorvtertuervgterjXXXXxx" /></Col>
            <Col sm={3}><CarCard title="car2" description="XXXXXXXXXXXXXsfskdkgjhpjeorvtertuervgterjXXXXxx" /></Col>
            <Col sm={3}><CarCard title="car3" description="XXXXXXXXXXXXXsfskdkgjhpjeorvtertuervgterjXXXXxx" /></Col>
            <Col sm={3}><CarCard title="car4" description="XXXXXXXXXXXXXsfskdkgjhpjeorvtertuervgterjXXXXxx" /></Col>
            <Col sm={3}><CarCard title="car5" description="XXXXXXXXXXXXXsfskdkgjhpjeorvtertuervgterjXXXXxx" /></Col>
            <Col sm={3}><CarCard title="car6" description="XXXXXXXXXXXXXsfskdkgjhpjeorvtertuervgterjXXXXxx" /></Col>
            
        </Row>
    );
}

export default carCards;
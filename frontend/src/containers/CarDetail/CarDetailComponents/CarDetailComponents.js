import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import classes from './CarDetailComponents.module.css';
import Rent from '../../Rent/Rent';
const carPic = (props) => {
    const imagesPath = props.imagesPath.map((path, index) => (
        <Carousel.Item key={index}>
            <img
                className="d-block w-100 h-100"
                src={path}
                alt='carPic'
            />
        </Carousel.Item>
    ))
    return (
        <Carousel>
            {imagesPath}
        </Carousel>
    );
}

const carDetailR = (props) => {

    return (
        <div>
            <div className={classes.DivHeader}><span className={classes.Header}>{props.brand + " - " + props.type}</span></div>
        </div>
    );
}

const carDetailMiddle = (props) => {
    let availdateFrom = new Date(props.payload.availFrom);
    let readableDateFrom = availdateFrom.toDateString();
    let availdateTo = new Date(props.payload.availTo);
    let readableDateTo = availdateTo.toDateString();

    return (
        <div className={classes.Detail}>
            <p className={classes.buttomline}></p>
            <Row>
                <Col  xs="3">YEAR  </Col><Col>: {props.payload.regYear}</Col>
            </Row>
            <Row>
                <Col  xs="3">CAR NUMBER </Col><Col>: {props.payload.LNumber}</Col>
            </Row>
            <Row>
                <Col  xs="3">GEAR TYPE </Col><Col>: {props.payload.gear === 'auto' ? 'Auto' : 'Manual'}</Col>
            </Row>
            <Row>
                <Col  xs="3">SEAT </Col><Col>: {props.payload.seat}</Col>
            </Row>
            <Row>
                <Col  xs="3">EQUIPMENT </Col><Col>: {props.payload.equipment}</Col>
            </Row>
            <Row>
                <Col  xs="3">DETAIL</Col><Col>: {props.payload.description}</Col>
            </Row>
            <Row>
                <Col  xs="3">PRICE PER DAY </Col><Col>: {props.payload.pricePerDay}</Col>
            </Row>
            <Row>
                <Col  xs="3">DEPOSIT </Col><Col>: {props.payload.deposit}</Col>
            </Row>
            <Row>
                <Col  xs="3">AVAILABLE FROM </Col><Col>: {readableDateFrom }  </Col>
            </Row>
            <Row>
                <Col  xs="3">AVAILABLE UNTIL </Col><Col>: {readableDateTo} </Col>
            </Row>
            <p className={classes.buttomline}></p>
            <Row>
               <Rent pricePerDay={props.payload.pricePerDay} deposit={props.payload.deposit} />
            </Row>
            
        </div >
    );
}

export { carPic, carDetailR, carDetailMiddle };
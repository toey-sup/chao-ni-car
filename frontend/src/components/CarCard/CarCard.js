import React from 'react';
import { Card,Button } from 'react-bootstrap';
import classes from './CarCard.module.css';
import logo from './Untitled.png';

const carCard = (props) => {
    return (
        <Card style={{ width: '13rem' }} className={classes.Card}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="danger">Rent!</Button>
            </Card.Body>
        </Card>
    );
}

export default carCard;
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './CarCard.module.css';
import "./CarCard.css"
import logo from './Untitled.png';
import { withRouter } from 'react-router-dom';

const carCard = (props) => {
    console.log('logo', props.photo)
    return (
        <Card style={{ width: '13rem' }} className={classes.Card}>
            <Card.Img variant="top" src={props.picture} alt='car' />
            <Card.Body>
                <Card.Title>{props.brand + " " + props.type}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="danger" onClick={() => props.history.push('/car/' + props.id)}>View</Button>
            </Card.Body>
        </Card>
    );
}

export default carCard;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import classes from './CarDetailComponents.module.css';

const carPic = (props) => {
    const imagesPath = props.imagesPath.map((path, index) => (
        <Carousel.Item key={index}>
            <img
                className="d-block w-100 h-100"
                src={path}
            />
            <Carousel.Caption>
                <p>Picture {index+1}</p>
            </Carousel.Caption>
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

export { carPic, carDetailR };
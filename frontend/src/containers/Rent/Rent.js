import React, { Component } from 'react';
import classes from './Rent.module.css';

class Rent extends Component {
    render() {
        return (
            <div className={classes.Div}>
                <div style={{textAlign:'center'}}><h3>Rent</h3></div>
                เลือกวันเวลาสถานที่ + ชำระเงิน
            </div>
        );
    }
}

export default Rent;
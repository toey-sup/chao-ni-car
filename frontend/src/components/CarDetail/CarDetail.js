import React, { Component } from 'react';
import classes from './CarDetail.module.css';

class CarDetail extends Component {
    render() {
        return(
            <div className={classes.Div}>
                {this.props.match.params.id}
            </div>
        );
    }
}

export default CarDetail;
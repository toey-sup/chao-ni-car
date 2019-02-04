import React, { Component } from 'react';
import classes from './CarDetail.module.css';
import { Row, Col } from 'react-bootstrap';
import { carPic as CarPic, carDetailR as CarDetailR } from './CarDetailComponents/CarDetailComponents';

import testPic1 from './test/img.jpg';
import testPic2 from './test/img2.jpg';

class CarDetail extends Component {
    state = {
        picsPath: [testPic1,testPic2], //fetch from server
        title: 'รถคันที่: '+this.props.match.params.id
    }
    render() {

        return (
            <div className={classes.Div}>
                <Row>
                    <Col xs={6}><CarPic imagesPath={this.state.picsPath} /></Col>
                    <Col xs={6}><CarDetailR title={this.state.title}/></Col>
                </Row>
            </div>
        );
    }
}

export default CarDetail;
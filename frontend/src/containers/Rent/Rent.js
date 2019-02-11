import React, { Component } from 'react';
import classes from './Rent.module.css';
import { Col, Row, FormLabel, FormGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

class Rent extends Component {
    state = {
        formDate: null,
        toDate: null,
        diffDate: null,
    }

    onChangeHandler(e, state) {
        const oldState = { ...this.state };
        oldState[state] = e.target.value;
        this.setState(oldState);
    }
    dateChangeHandler(date, target) {
        const oldState = { ...this.state };
        oldState[target] = date;
        this.setState(oldState, () => {
            if (this.state.toDate && this.state.fromDate && this.state.toDate > this.state.fromDate) {
                var diffDays = parseInt((this.state.toDate - this.state.fromDate) / (1000 * 60 * 60 * 24));
                this.setState({ diffDate: diffDays }, console.log(diffDays));
            }
        });
        console.log(this.state);

    }

    render() {
        return (
            <div className={classes.Div}>
                <div style={{ textAlign: 'center' }}><h3>Rent</h3></div>
                {/* เลือกวันเวลาสถานที่ + ชำระเงิน */}
                <FormGroup>
                    <FormLabel>
                        <strong>Choose Date</strong>
                    </FormLabel>
                    <Row><Col>{this.state.diffDate ? <div style={{ textAlign: 'center' }}><strong>เป็นเวลา: {this.state.diffDate}วัน</strong></div>: null}</Col></Row>
                    <Row>
                        <Col sm={6}>
                            วันที่จะรับรถ:{" "}
                            <DatePicker
                                selected={this.state.fromDate}
                                onChange={date => this.dateChangeHandler(date, "fromDate")}
                                isClearable
                            />
                        </Col>
                        <Col sm={6}>
                            วันที่จะคืนรถ:{" "}
                            <DatePicker
                                selected={this.state.toDate}
                                onChange={date => this.dateChangeHandler(date, "toDate")}
                                isClearable
                            />
                        </Col>
                    </Row>

                    <Row>

                    </Row>
                </FormGroup>
            </div>
        );
    }
}

export default Rent;
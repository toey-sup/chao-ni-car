import React, { Component } from 'react';
import classes from './Rent.module.css';
import { Col, Row, FormLabel, FormGroup, FormControl, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actionTypes from '../../store/actions/actionTypes';

class Rent extends Component {
    state = {
        fromDate: null,
        toDate: null,
        fromLoc: '',
        toLoc: '',
        diffDate: null,
        validated: false,
        invalidDate: false

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
                if(diffDays<=0){
                    this.setState.invalidDate = true;
                }
                else{
                    this.setState.invalidDate = false;
                }
            }
        });
        console.log(this.state);
    }

    rentHandler = (event) => {
        event.preventDefault();
        if (this.state.fromDate === null || this.state.toDate === null || this.state.invalidDate === true) return;
        alert("Rent");
    }

    render() {
        let providerDisplay = null
        let pickdate = null
        let returndate = null
        let dateAlert = null;
        if (this.props.user) {
            if(this.state.invalidDate){
                 dateAlert =
                 <div>
                    <p>fuck</p>
                </div>
              }
            if (!this.props.user.isProvider) {
                providerDisplay = <button className ={classes.rent} type='submit' style={{marginTop:'8px'}}
                onClick={() => { this.setState({ validated: true })
                this.props.onRent(this.state.fromDate,this.state.toDate,this.state.diffDate,this.state.diffDate*this.props.pricePerDay+this.props.deposit);
                this.props.history.replace('/payment/' + this.props.match.params.id );
            }}
            >Rent!</button>

            pickdate =     <div>
            Pick Up Date:{" "}
               <DatePicker
                   selected={this.state.fromDate}
                   onChange={date => this.dateChangeHandler(date, "fromDate")}

               />
           </div>

           returndate =  <div>
           Return Date:{" "}
               <DatePicker
                   selected={this.state.toDate}
                   onChange={date => this.dateChangeHandler(date, "toDate")}

               />
           </div>
            }
        }
        let item = (
            <div className={classes.Div} style={{ textAlign: 'center' }}>
                <p><strong>Please Login First!</strong></p>
            </div>
        );
        
        if (this.props.user) {
            
            item = (
                <div className={classes.Div}>
                    {/* เลือกวันเวลาสถานที่ + ชำระเงิน */}
                    <Form validated={this.state.validated} onSubmit={this.rentHandler}>
                        <FormGroup>
                            <Row>
                                <Col>
                                {this.state.diffDate ? <div style={{ textAlign: 'center' }}><strong>{this.state.diffDate} days Total Price: {this.state.diffDate*this.props.pricePerDay+this.props.deposit}บาท</strong></div> : null}
                                {dateAlert}
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                {pickdate}
                      
                                </Col>
                                <Col sm={6}>
                               {returndate}
            
                                </Col>
                            </Row>
                            {/* <hr />
                            <Row>
                                <Col sm={12} md={6}><FormLabel>สถานที่ที่ต้องการรับรถ</FormLabel>
                                    <FormControl
                                        required
                                        size='sm'
                                        type="text"
                                        value={this.state.fromLoc}
                                        placeholder="Enter location"
                                        onChange={(e) => this.onChangeHandler(e, 'fromLoc')}
                                    /></Col>
                                <Col sm={12} md={6}>
                                    <FormLabel>สถานที่ที่ต้องการส่งรถ</FormLabel>
                                    <FormControl
                                        required
                                        size='sm'
                                        type="text"
                                        value={this.state.toLoc}
                                        placeholder="Enter location"
                                        onChange={(e) => this.onChangeHandler(e, 'toLoc')}
                                    />
                                </Col>
                            </Row> */}
                            
                            <Row>
                                <Col style={{textAlign:'right'}}>{providerDisplay}</Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </div>
            );
        }
        return (
            <>
                {item}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.login.user
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onRent: (from,to,du,price) => dispatch({ type: actionTypes.SET_RENT, fromDate: from, toDate: to, duration:du, price:price }),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Rent));
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from "../../images/logo.png";
import Payment from '../../components/Payments/Payment';
import "./PaymentPage.css";
import { connect } from 'react-redux';

class PaymentPage extends Component {
    render() {
        return (
            <div className="paymentpagebackground">
                <div className="paymentcontainer">
                    <div className="header">
                        <p className="headertext">Payment Detail</p>
                        <div className="paymentcontent">
                            <Row>
                                <Col sm="5">
                                    <p>Invoice</p>
                                    <p>Bill from</p>
                                    <p>Bill to</p>
                                </Col>
                                <Col>
                                    <img src={logo}></img>
                                    <p className="highlight">Provider : Fightnaja</p>
                                    <p>Invoice date: 17/12/2018</p>
                                    <p>Email: Kitipat</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="highlight">Car detail</p>
                                    <p>YEAR</p>
                                    <p>CAR NUMBER</p>
                                    <p>GEAR TYPE</p>
                                    <p>SEAT</p>
                                    <p>EQUIPMENT</p>
                                    <p>PRICE PER DAY</p>
                                    <p>DEPOSIT</p>
                                    <p>AVAILABLE DATE</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                    <Payment requestID="1234" price={this.props.pricePerDay*this.props.duration} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userId: state.rent.userId,
        pricePerDay: state.rent.pricePerDay,
        duration: state.rent.duration,
        car: state.rent.car,
    }
};
export default connect(mapStateToProps)(PaymentPage);
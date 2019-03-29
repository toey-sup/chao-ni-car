import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';
import logo from "../../images/logo.png";
import Payment from '../../components/Payments/Payment';
import "./PaymentPage.css";
import axios from 'axios';
class PaymentPage extends Component {
    state = {
        loading: false,
        //all of belows will be fetched from server
        brand: 'None',
        type: '',
        LNumber: '',
        regYear: '',
        gear: '',
        seat: 0,
        equipment: '',
        availFrom: null,
        availTo: null,
        description: '',
        pricePerDay: null,
        deposit: null,
        error: null,
        //==========
        rentClicked: false
    }
    componentDidMount() {
        // Bug
        
        console.log(this.props.location.pathname)
        console.log(this.props.match.params.id)
        //console.log(this.props.match.params.id);
        this.setState({ loading: true });
        axios.get('/api/cars/' + this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                const newState = {
                    ...this.state,
                    loading: false,
                    brand: res.data.brand,
                    type: res.data.type,
                    LNumber: res.data.LNumber,
                    regYear: res.data.regYear,
                    gear: res.data.gear,
                    seat: res.data.seat,
                    equipment: res.data.equipment,
                    picsPath: [res.data.photo],
                    availFrom: res.data.availFrom,
                    availTo: res.data.availTo,
                    description: res.data.description,
                    pricePerDay: res.data.pricePerDay,
                    deposit: res.data.deposit
                }
                this.setState(newState);
            })
            .catch(err => {
                this.setState({ loading: false, error: err })
            });
    }
    render() {
        return (
            <div className = "paymentpagebackground">
                <div className = "paymentcontainer">
                    <div className = "header">
                        <p className = "headertext">Payment Detail</p>
                        <div className = "paymentcontent">
                        <Row>
                            <Col>
                                <p><b>Invoice</b></p>
                                <p><b>Bill from</b></p>
                                <p><b>Bill to</b></p>
                            </Col>
                            <Col>
                                <img src = {logo}></img>
                                <p className = "highlight"><b>Provider</b></p>
                                <p><b>Invoice date:</b> 17/12/2018</p>
                                <p><b>Email:</b> Kitipat@outlook.co.th</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className = "highlight"><b>CAR DETAIL</b></p>
                                <p><b>BRAND :</b> {this.state.brand}</p>
                                <p><b>CAR NUMBER :</b> {this.state.LNumber}</p>
                                <p><b>GEAR TYPE : </b>{this.state.gear}</p>
                                <p><b>SEAT :</b> {this.state.seat}</p>
                                <p><b>EQUIPMENT :</b> {this.state.equipment}</p>
                                <p><b>PRICE PER DAY :</b> {this.state.pricePerDay}</p>
                                <p><b>DEPOSIT :</b> {this.state.deposit}</p>
                            </Col>
                            <Col>
                                <p className = "highlight"><b>DATE</b></p>
                                <p><b>AVAILABLE DATE FROM:</b> {this.state.availFrom}</p>
                                <p><b>AVAILABLE DATE TO:</b> {this.state.availTo}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <p className = "highlight"><b>TOTAL PRICE</b></p>
                            <p> <b>DEPOSIT :</b> {this.state.deposit} </p>
                            <p> <b>PRICEPERDAY :</b> {this.state.pricePerDay}</p>
                            <p> <b>RENT DAY :</b> 30 days </p>
                            <p className = "bottomline"></p>
                            <p> <b>Total : 9000 bath</b></p>
                            <p className = "bottomline"></p>
                            </Col>
                        </Row>
                        <Row>
                            <Payment requestID="1234" />
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentPage;
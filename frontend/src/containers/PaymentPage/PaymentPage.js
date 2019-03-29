import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';
import logo from "../../images/logo.png";
import Payment from '../../components/Payments/Payment';
import "./PaymentPage.css";
import axios from 'axios';
import moment from 'moment'
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
                    deposit: res.data.deposit,
                }
                this.setState(newState);
            })
            .catch(err => {
                this.setState({ loading: false, error: err })
            });
    }
    render() {
        let previousPage = "/car/" + this.props.match.params.id;
        let availdateFrom = new Date(this.state.availFrom);
        let readableDateFrom = availdateFrom.toDateString();
        let availdateTo = new Date(this.state.availTo);
        let readableDateTo = availdateTo.toDateString();
        var deposit = Number(this.state.deposit);
        var pricePerDay = Number(this.state.pricePerDay);
        var dateT = moment(this.state.availTo,);
        var dateF = moment(this.state.availFrom);
        var diffdate = (dateT.diff(dateF, 'days'));
        var totalprice = deposit + (pricePerDay * diffdate);
        console.log(diffdate);
        return (
            <div className = "paymentpagebackground">
                <div className = "paymentcontainer">
                    <div className = "header">
                        <p className = "headertext"><b>Payment Detail</b></p>
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
                                <p><b>Invoice date:</b> {moment().format('YYYY MM DD')}</p>
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
                            </Col>
                            <Col>
                                <p className = "highlight"><b>DATE</b></p>
                                <p><b>AVAILABLE DATE FROM:</b></p>
                                <p>{readableDateFrom}</p>
                                <p><b>AVAILABLE DATE TO:</b></p>
                                <p>{readableDateTo}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <p className = "highlight"><b>TOTAL PRICE</b></p>
                            <p> <b>DEPOSIT :</b> {this.state.deposit} bath</p>
                            <p> <b>PRICEPERDAY :</b> {this.state.pricePerDay} bath</p>
                            <p> <b>RENT DAY :</b> {diffdate} days </p>
                            <p className = "bottomline"></p>
                            <p> <b>Total :</b> {totalprice} bath</p>
                            <p className = "bottomline"></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col  className = "btnwrapper">
                           <a href = {previousPage} ><button  className = "backbtn">BACK</button></a>
                            <Payment requestID="1234" />
                            </Col>
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentPage;
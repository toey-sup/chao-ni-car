import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import Payment from "../../components/Payments/Payment";
import "./PaymentPage.css";
import axios from "axios";
import moment from "moment";
import { connect } from "react-redux";

class PaymentPage extends Component {
  state = {
    loading: false,
    //all of belows will be fetched from server
    carId: "",
    brand: "None",
    type: "",
    LNumber: "",
    regYear: "",
    gear: "",
    seat: 0,
    equipment: "",
    toDate: null,
    fromDate: null,
    description: "",
    pricePerDay: null,
    deposit: null,
    error: null,
    totalprice: 0,
    //==========
    rentClicked: false
  };
  componentDidMount() {
    // Bug

    console.log(this.props.location.pathname);
    console.log(this.props.match.params.id);
    //console.log(this.props.match.params.id);
    this.setState({ loading: true });
    axios
      .get("/api/cars/" + this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        var deposit = Number(res.data.deposit);
        var pricePerDay = Number(res.data.pricePerDay);
        var dateT = moment(this.props.rent.toDate);
        var dateF = moment(this.props.rent.fromDate);
        var diffdate = dateT.diff(dateF, "days");
        const totalprice = deposit + pricePerDay * diffdate;
        console.log("TOTAL", dateF, dateT, diffdate)
        console.log("TOTAL PRICE", totalprice)
        const newState = {
          ...this.state,
          loading: false,
          carId: res.data._id,
          brand: res.data.brand,
          type: res.data.type,
          LNumber: res.data.LNumber,
          regYear: res.data.regYear,
          gear: res.data.gear,
          seat: res.data.seat,
          equipment: res.data.equipment,
          picsPath: [res.data.photo],
          fromDate: this.props.rent.fromDate, 
          toDate: this.props.rent.toDate, 
          description: res.data.description,
          pricePerDay: res.data.pricePerDay,
          deposit: res.data.deposit,
          totalprice: totalprice,
          diffdate: diffdate
        };
        this.setState(newState);
      })
      .catch(err => {
        this.setState({ loading: false, error: err });
      });
  }

  handleToken = async (token) => {
    const request = {
      //requestID: this.state.requestID,
      amount: this.state.totalprice * 100,
      carId: this.state.carId,
      dateFrom: this.state.fromDate,
      dateTo: this.state.toDate,
      token: token
    };
    console.log(request);
    const res = await axios.post("/api/stripe", request);
    console.log(res)
    // ***********************************
    // TODO: redirect to congratulation page by using (res)
    // may be create new page (up to you what you think it's best)
    // the page will show congratulation message and request id
    // ***********************************
  };

  render() {
    let previousPage = "/car/" + this.props.match.params.id;
    let fromDate = new Date(this.state.fromDate);
    let readableDateFrom = fromDate.toDateString();
    let toDate = new Date(this.state.toDate);
    let readableDateTo = toDate.toDateString();
    
    return (
      <div className="paymentpagebackground">
        <div className="paymentcontainer">
          <div className="header">
            <p className="headertext">
              <b>Payment Detail</b>
            </p>
            <div className="paymentcontent">
              <Row>
                <Col>
                  <p>
                    <b>Invoice</b>
                  </p>
                  <p>
                    <b>Bill from</b>
                  </p>
                  <p>
                    <b>Bill to</b>
                  </p>
                </Col>
                <Col>
                  <img src={logo} />
                  <p className="highlight">
                    <b>Provider</b>
                  </p>
                  <p>
                    <b>Invoice date:</b> {moment().format("YYYY MM DD")}
                  </p>
                  <p>
                    <b>Email:</b> Kitipat@outlook.co.th
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="highlight">
                    <b>CAR DETAIL</b>
                  </p>
                  <p>
                    <b>BRAND :</b> {this.state.brand}
                  </p>
                  <p>
                    <b>CAR NUMBER :</b> {this.state.LNumber}
                  </p>
                  <p>
                    <b>GEAR TYPE : </b>
                    {this.state.gear}
                  </p>
                  <p>
                    <b>SEAT :</b> {this.state.seat}
                  </p>
                  <p>
                    <b>EQUIPMENT :</b> {this.state.equipment}
                  </p>
                </Col>
                <Col>
                  <p className="highlight">
                    <b>DATE</b>
                  </p>
                  <p>
                    <b>AVAILABLE DATE FROM:</b>
                  </p>
                  <p>{readableDateFrom}</p>
                  <p>
                    <b>AVAILABLE DATE TO:</b>
                  </p>
                  <p>{readableDateTo}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="highlight">
                    <b>TOTAL PRICE</b>
                  </p>
                  <p>
                    {" "}
                    <b>DEPOSIT :</b> {this.state.deposit} bath
                  </p>
                  <p>
                    {" "}
                    <b>PRICEPERDAY :</b> {this.state.pricePerDay} bath
                  </p>
                  <p>
                    {" "}
                    <b>RENT DAY :</b> {this.state.diffdate} days{" "}
                  </p>
                  <p className="bottomline" />
                  <p>
                    {" "}
                    <b>Total :</b> {this.state.totalprice} bath
                  </p>
                  <p className="bottomline" />
                </Col>
              </Row>
              <Row>
                <Col className="btnwrapper">
                  <a href={previousPage}>
                    <button className="backbtn">BACK</button>
                  </a>
                  <Payment
                    //carId={this.state.carId}
                    price={this.state.totalprice}
                    handleToken={this.handleToken}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.login.user,
    rent: state.rent
  };
};

export default connect(mapStateToProps)(PaymentPage);

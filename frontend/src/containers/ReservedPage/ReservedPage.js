import React, {Component} from 'react';
import { Row, Col } from "react-bootstrap";
import "./ReservedPage.css";
import axios from "axios";
import moment from "moment";
class ReservedPage extends Component {
  state = {
    loading: false,
    //all of belows will be fetched from server
    providerName: "",
    providerSurname: "",
    providerEmail: "",
    providerTel: "",
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
        var deposit = Number(res.data.deposit);
        var pricePerDay = Number(res.data.pricePerDay);
        var dateT = moment(this.props.rent.toDate);
        var dateF = moment(this.props.rent.fromDate);
        var diffdate = dateT.diff(dateF, "days");
        const totalprice = deposit + pricePerDay * diffdate;
        const newState = {
          ...this.state,
          loading: false,
          providerName: res.data._owner.name,
          providerSurname: res.data._owner.surname,
          providerEmail: res.data._owner.email,
          providerTel: res.data._owner.tel,
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
    render() {
        return(
          <div className="paymentpagebackground">
          <div className="paymentcontainer">
            <div className="header">
              <p className="headertext">
                <b>Payment Detail</b>
              </p>
              <div className="paymentcontent">
                <Row>
                  <Col>
                    <p className="highlight">
                      <b>INVOICE</b>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p><b>Bill from</b></p>
                  </Col>
                  <Col>
                    <p><b>Bill to</b></p>
                    <p>Name : {this.state.providerName}</p>
                    <p>Surname : {this.state.providerSurname}</p>
                    <p>E-mail : {this.state.providerEmail}</p>
                    <p>Tel : {this.state.providerTel}</p>
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
                    <p></p>
                    <p>
                      <b>AVAILABLE DATE TO:</b>
                    </p>
                    <p></p>
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
                    <a href="/">
                      <button className="backbtn">BACK</button>
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
            

            
        )
        }
    }
    
    export default ReservedPage
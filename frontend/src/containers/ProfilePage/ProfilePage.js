import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import "./ProfilePage.css";
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actionTypes from '../../store/actions/actionTypes';
import axios from "axios";
import moment from "moment";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          surname: "",
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
          id: "",
          drivingnumber: "",
          tel: "",
        }
    }

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
        console.log("HELLO")
        var deposit = Number(res.data.deposit);
        console.log("HELLO")
        var pricePerDay = Number(res.data.pricePerDay);
        console.log("HELLO")
        var dateT = moment(this.props.rent.toDate);
        console.log("HELLO")
        var dateF = moment(this.props.rent.fromDate);
        console.log("HELLO")
        var diffdate = dateT.diff(dateF, "days");
        const totalprice = deposit + pricePerDay * diffdate;
        console.log("TOTAL", dateF, dateT, diffdate)
        console.log("TOTAL PRICE", totalprice)
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
    console.log(this.state.providerName);
    // ***********************************
    // TODO: redirect to congratulation page by using (res)
    // may be create new page (up to you what you think it's best)
    // the page will show congratulation message and request id
    // ***********************************
  };

    render() {
        console.log(this.props.user);
        return(
        <div>
            <div class="profilebackground">
                <div className="profilecontainer">
                    <div className="profilecontent">
                    <Row>
                        <Col>
                            <h1 class="center">Profile </h1>                    
                            <br></br>
                            <b>Name : {this.props.user? this.props.user.name:"Loading"}</b>
                            <br></br>
                            <br></br>
                            <b>Surname : {this.props.user? this.props.user.surname:"Loading"}</b>
                            <br></br>
                            <br></br>
                            <b>E-mail : {this.props.user? this.props.user.email:"Loading"}</b>
                            <br></br>
                            <br></br>
                            <b>Tel : {this.props.user? this.props.user.tel:"Loading"}</b>
                            <br></br>
                            <br></br>
                            <b>ID number :{this.props.user? this.props.user.idCardNum:"Loading"}</b>
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
      user: state.login.user,
      rent: state.rent
    };
  };
  
  export default connect(mapStateToProps)(ProfilePage);
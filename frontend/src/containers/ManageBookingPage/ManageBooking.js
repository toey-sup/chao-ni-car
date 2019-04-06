import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./ManageBooking.css";
import Booking from "../../components/Booking/Booking";
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux';
import axios from "axios";

class ManageBooking extends Component {
  state = {
    loading: true,
    requests: []
  };

  componentDidMount = async () => {
    const res = await axios.get("/api/request");
    console.log(res);
    this.setState({
      requests: res.data
    });
  };

  render() {
    let reservations = <Spinner />
    if (this.props.user) {
      switch (this.props.user.isProvider) {
        case true: // แสดงสำหรับเจ้าของรถ มีปุ่ม complete เพื่อยิงไปบอก server ว่างานเสร็จแล้ว
          reservations = <p>Owner</p>
          break;
        case false: // แสดงสำหรับคนเช่า มีปุ่ม cancel สำหรับแต่ละ reservation ที่งานยังไม่ isCompleted
          reservations = <p>Renter</p>
          break;
        default: // ใส่ loading
          reservations = <Spinner />
          break;
      }
    }
    
    return (
      <div className="bookingbackground">
        <div className="manageContainer">
          <div className="managetitle">ManageBooking</div>
          {/* <Booking /> */}
          {reservations}



          <div className="btnwrapper">
            <a href="/">
              <button className="backbtn">BACK</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.login.user
  }
};

export default connect(mapStateToProps)(ManageBooking);

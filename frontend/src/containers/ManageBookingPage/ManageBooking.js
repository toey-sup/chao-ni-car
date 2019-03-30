import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./ManageBooking.css";
import Booking from "../../components/Booking/Booking";
class ManageBooking extends Component {
  render() {
    return (
      <div className="bookingbackground">
        <div className="manageContainer">
          <div className="managetitle">ManageBooking</div>
          <Booking />
          <div className="btnwrapper">
            <a href = "/"><button className="backbtn">BACK</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageBooking;

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./ManageBooking.css";
import Booking from "../../components/Booking/Booking";
import axios from "axios";

class ManageBooking extends Component {
  state = {
    isProvider: null
  };

  componentDidMount = async () => {
    const res = await axios.get("/api/request");
    console.log(res);
    this.setState({
      isProvider: res.data.isProvider
    });
  };

  render() {
    let reservations = <p>NULL</p>;
    switch (this.state.isProvider) {
      case true: // แสดงสำหรับเจ้าของรถ มีปุ่ม complete เพื่อยิงไปบอก server ว่างานเสร็จแล้ว

        break;
      case false: // แสดงสำหรับคนเช่า มีปุ่ม cancel สำหรับแต่ละ reservation ที่งานยังไม่ isCompleted
        reservations = <p></p>
        break;
      default: // ใส่ loading
        break;
    }
    return (
      <div className="bookingbackground">
        <div className="manageContainer">
          <div className="managetitle">ManageBooking</div>
          <Booking />
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

export default ManageBooking;

import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "./ManageBooking.css";
import Booking from "../../components/Booking/Booking";
import Spinner from "../../components/UI/Spinner/Spinner";
import DotSpinner from "../../components/UI/DotSpinner/Spinner";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../store/actions";
class ManageBooking extends Component {
  state = {
    loading: true,
    isDeleting: false,
    isCompleting: false,
    isPickingUp: false,
    isDisabled: false
  };

  componentDidMount = async () => {
    // const res = await axios.get("/api/request");
    // console.log(res);
    this.props.fetchRequests();
  };

  componentWillUpdate() {
    if (this.state.isDeleting === true) {
      this.setState({ isDeleting: false });
    }
    if (this.state.isCompleting === true) {
      this.setState({ isCompleting: false });
    }
    if (this.state.isPickingUp === true) {
      this.setState({ isPickingUp: false });
    }
    if (this.state.isDisabled === true) {
      this.setState({ isDisabled: false });
    }
  }

  cancelRequestHandler = async requestId => {
    this.setState({
      isDeleting: true,
      isDisabled: true
    });
    await this.props.deleteRequest(requestId);
  };

  updateRequestHandler = async requestId => {
    this.setState({
      isPickingUp: true,
      isDisabled: true
    });
    await this.props.updateRequest(requestId);
  };

  completeTaskHandler = async requestId => {
    this.setState({
      isCompleting: true,
      isDisabled: true
    });
    await this.props.completeRequest(requestId);
  };

  render() {
    let reservations = <Spinner />;
    if (this.props.user) {
      switch (this.props.user.isProvider) {
        case true: // แสดงสำหรับเจ้าของรถ มีปุ่ม complete เพื่อยิงไปบอก server ว่างานเสร็จแล้ว
          reservations = this.props.requests.map(request => {
            const _car = request["_car"];
            const status = request["status"];
            let isCompletedButtonDisabled = false;
            if (status !== "PickedUp") {
              isCompletedButtonDisabled = true;
            }
            return (
              <Card>
                <Card.Header as="h5">Request ID: {request["_id"]}</Card.Header>
                <Card.Body>
                  <Card.Title>
                    {_car["brand"]} {_car["type"]}
                  </Card.Title>
                  <img
                    src={_car["photo"]}
                    alt="carphoto"
                    height="100"
                    width="150"
                  />
                  <Card.Text>
                    seat: {_car["seat"]} gear: {_car["gear"]}
                  </Card.Text>
                  <Card.Text>สถานที่รับรถ: ??? สถานที่ส่งรถ: ???</Card.Text>
                  <Card.Text>status: {request["status"]}</Card.Text>
                  <Button
                    variant="success"
                    onClick={() => this.completeTaskHandler(request["_id"])}
                    disabled={this.state.isDisabled | isCompletedButtonDisabled}
                  >
                    {this.state.isCompleting ? (
                      <DotSpinner />
                    ) : (
                      <span>Complete Task</span>
                    )}
                  </Button>
                </Card.Body>
              </Card>
            );
          });
          break;
        case false: // แสดงสำหรับคนเช่า มีปุ่ม cancel สำหรับแต่ละ reservation ที่งานยังไม่ isCompleted

          reservations = this.props.requests.map(request => {
            const _car = request["_car"];
            const status = request["status"];
            let isCancelDisabled = false;
            let isPickingUpDisabled = false;
            if (status === 'PickedUp') {
              isCancelDisabled = true;
              isPickingUpDisabled = true;
            }


            let showedButton = null;
            if (status !== "Completed") {
              showedButton = (
                <div>
                  <Button
                    variant="danger"
                    onClick={() => this.cancelRequestHandler(request["_id"])}
                    disabled={this.state.isDisabled | isCancelDisabled}
                  >
                    {this.state.isDeleting ? (
                      <DotSpinner />
                    ) : (
                      <span>Cancel Reservation</span>
                    )}
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => this.updateRequestHandler(request["_id"])}
                    disabled={this.state.isDisabled | isPickingUpDisabled}
                  >
                    {this.state.isPickingUp ? (
                      <DotSpinner />
                    ) : (
                      <span>I pick up a car already!</span>
                    )}
                  </Button>
                </div>
              )
            }
                
            
            return (
              <Card>
                <Card.Header as="h5">Request ID: {request["_id"]}</Card.Header>
                <Card.Body>
                  <Card.Title>
                    {_car["brand"]} {_car["type"]}
                  </Card.Title>
                  <img
                    src={_car["photo"]}
                    alt="carphoto"
                    height="100"
                    width="150"
                  />
                  <Card.Text>
                    seat: {_car["seat"]} gear: {_car["gear"]}
                  </Card.Text>
                  <Card.Text>สถานที่รับรถ: ??? สถานที่ส่งรถ: ???</Card.Text>
                  <Card.Text>status: {request["status"]}</Card.Text>

                  {showedButton}
                </Card.Body>
              </Card>
            );
          });
          break;
        default:
          // ใส่ loading
          reservations = <Spinner />;
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
    user: state.login.user,
    requests: state.request
  };
};

export default connect(
  mapStateToProps,
  actions
)(ManageBooking);

import React, { Component } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
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

                  <Row>
                    <Col>
                      <Card.Img src={_car["photo"]} />
                    </Col>
                    <Col>
                      <Card.Text>
                        seat: {_car["seat"]} gear: {_car["gear"]}
                      </Card.Text>
                      <Card.Text>วันเริ่ม: {new Date(request["dateFrom"]).toDateString()} วันสิ้นสุด: {new Date(request["dateTo"]).toDateString()}</Card.Text>
                      <Card.Text>สถานที่รับรถ: ??? สถานที่ส่งรถ: ???</Card.Text>
                      <Card.Text>Renter: {request["_renter"]["name"]}</Card.Text>
                      <Card.Text>status: {request["status"]}</Card.Text>
                    </Col>
                  </Row>
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
            if (status === "PickedUp") {
              isCancelDisabled = true;
              isPickingUpDisabled = true;
            }

            let showedCancleButton = null;
            let showedPickButton = null;
            if (status !== "Completed") {
              showedCancleButton = (
                <div className = "managebtnwrapper">
                  <button
                    className = "cancle"
                    onClick={() => this.cancelRequestHandler(request["_id"])}
                    disabled={this.state.isDisabled | isCancelDisabled}
                  >
                    {this.state.isDeleting ? (
                      <DotSpinner />
                    ) : (
                      <span>Cancel</span>
                    )}
                  </button>
                </div>
              );
              showedPickButton = (
                <div className = "managebtnwrapper">
                  <button
                    className = "pickup"
                    onClick={() => this.updateRequestHandler(request["_id"])}
                    disabled={this.state.isDisabled | isPickingUpDisabled}
                  >
                    {this.state.isPickingUp ? (
                      <DotSpinner />
                    ) : (
                      <span>pick up</span>
                    )}
                  </button>
                </div>
              );
            }

            return (
              <div>
                <Card.Header as="h5" className = "detail">Request ID: {request["_id"]}</Card.Header>
                <Card.Body>

                  <Row>
                    <Col xs={6} md={4}>
                      <Card.Img src={_car["photo"]} />
                    </Col>
                    <Col xs={6} md={4}>
                    {_car["brand"]} {_car["type"]}
                    <div className = "detail">
                      <p>วันเริ่ม: {new Date(request["dateFrom"]).toDateString()} วันสิ้นสุด: {new Date(request["dateTo"]).toDateString()}<br></br>
                         สถานที่รับรถ: ??? สถานที่ส่งรถ: ???<br></br>
                         Owner: {request["_owner"]["name"]}<br></br>
                         status: {request["status"]}
                      </p>
                      </div>
                    </Col>
                  <Col>
                     {showedPickButton}
                     {showedCancleButton}
                    
                  </Col>
                  </Row>
                </Card.Body>
              </div>
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

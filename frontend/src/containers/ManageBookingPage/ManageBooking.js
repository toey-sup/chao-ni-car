import React, { Component } from "react";
import { Badge, Card, Row, Col } from "react-bootstrap";
import "./ManageBooking.css";
import Spinner from "../../components/UI/Spinner/Spinner";
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
            let statusText = <Badge variant="primary">{status}</Badge>;
            let isCompletedButtonDisabled = false;
            let showedComplete = null;
            if (status === "Completed") {
              statusText = <Badge variant="success">{status}</Badge>;
              showedComplete = true;
            } else if (status === "PickedUp") {
              statusText = <Badge variant="warning">{status}</Badge>;
            }
            if (status !== "PickedUp") {
              isCompletedButtonDisabled = true;
            }

            return (
              <div>
                <Card.Header as="h5" className="detail">
                  Request ID: {request["_id"]}
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={6} md={4}>
                      <Card.Img src={_car["photo"]} />
                    </Col>
                    <Col xs={6} md={4}>
                      {_car["brand"]} {_car["type"]}
                      <div className="detail">
                        <p>
                          วันเริ่ม:{" "}
                          {new Date(request["dateFrom"]).toDateString()} <br />
                          วันสิ้นสุด:{" "}
                          {new Date(request["dateTo"]).toDateString()}
                          <br />
                          สถานที่รับรถ: {_car["location"]}
                          <br />
                          ชื่อเจ้าของรถ:{" "}
                          <a href={"/user/" + request["_owner"]["_id"]}>
                            {request["_owner"]["name"]}
                          </a>
                          <br />
                          ชื่อผู้เช่า:{" "}
                          <a href={"/user/" + request["_renter"]["_id"]}>
                            {request["_renter"]["name"]}
                          </a>
                          <br />
                          Status: {statusText}
                        </p>
                      </div>
                    </Col>
                    <Col>
                      {showedComplete ? (
                        null
                      ) : (
                        <button
                          className="pickup"
                          onClick={() =>
                            this.completeTaskHandler(request["_id"])
                          }
                          disabled={
                            this.state.isDisabled | isCompletedButtonDisabled
                          }
                        >
                          <span>Complete Task</span>
                        </button>
                      )}
                    </Col>
                  </Row>
                </Card.Body>
              </div>
            );
          });
          break;
        case false: // แสดงสำหรับคนเช่า มีปุ่ม cancel สำหรับแต่ละ reservation ที่งานยังไม่ isCompleted
          reservations = this.props.requests.map(request => {
            const _car = request["_car"];
            const status = request["status"];
            let isCancelDisabled = false;
            let isPickingUpDisabled = false;

            let statusText = <Badge variant="primary">{status}</Badge>;

            if (status === "PickedUp") {
              isCancelDisabled = true;
              isPickingUpDisabled = true;
              statusText = <Badge variant="warning">{status}</Badge>;
            }

            let showedCancleButton = null;
            let showedPickButton = null;
            if (status == "Completed") {
              statusText = <Badge variant="success">{status}</Badge>;
            }
            if (status !== "Completed") {
              showedCancleButton = (
                <div className="managebtnwrapper">
                  <button
                    className="cancle"
                    onClick={() => this.cancelRequestHandler(request["_id"])}
                    disabled={this.state.isDisabled | isCancelDisabled}
                  >
                    <span>Cancel</span>
                  </button>
                </div>
              );
              showedPickButton = (
                <div className="managebtnwrapper">
                  <button
                    className="pickup"
                    onClick={() => this.updateRequestHandler(request["_id"])}
                    disabled={this.state.isDisabled | isPickingUpDisabled}
                  >
                    <span>pick up</span>
                  </button>
                </div>
              );
            }

            return (
              <div>
                <Card.Header as="h5" className="detail">
                  Request ID: {request["_id"]}
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={6} md={4}>
                      <Card.Img src={_car["photo"]} />
                    </Col>
                    <Col xs={6} md={4}>
                      {_car["brand"]} {_car["type"]}
                      <div className="detail">
                        <p>
                          วันเริ่ม:{" "}
                          {new Date(request["dateFrom"]).toDateString()} <br />
                          วันสิ้นสุด:{" "}
                          {new Date(request["dateTo"]).toDateString()}
                          <br />
                          สถานที่รับรถ: {_car["location"]}
                          <br />
                          ชื่อเจ้าของรถ:{" "}
                          <a href={"/user/" + request["_owner"]["_id"]}>
                            {request["_owner"]["name"]}
                          </a>
                          <br />
                          ชื่อผู้เช่า:{" "}
                          <a href={"/user/" + request["_renter"]["_id"]}>
                            {request["_renter"]["name"]}
                          </a>
                          <br />
                          Status: {statusText}
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

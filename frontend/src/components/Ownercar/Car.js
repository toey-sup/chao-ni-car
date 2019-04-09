import React from "react";
import { withRouter } from "react-router-dom";
import binicon from "../../images/binicon.png";
import editicon from "../../images/editicon.png";
import { Button, Modal, ModalBody } from "react-bootstrap";
import "./Car.css";
import TextTruncate from "react-text-truncate";
class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.setState({
      show: false
    });
    this.props.handleDelete(this.props.id);
  }

  render() {
    return (
      <div className="car">
        <div
          style={{
            height: "250px",
            width: "10px",
            display: "flex",
            alignItems: "center",
            position: "absolute"
          }}
        >
          <div className={this.props.isRented ? "rent" : "notrent"} />
        </div>
        <div className="carimage">
          <img src={this.props.picture} className="imagecar" />
        </div>
        <div className="cartext">
          <h4 style={{ padding: "5px 0 5px 0", marginTop: "3px" }}>
            {this.props.brand} {this.props.type}
          </h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <div className="head">
              <p>license</p>
            </div>
            <p>{this.props.LNumber}</p>
            <div className="head">
              <p>Year</p>
            </div>
            <p> {this.props.regYear}</p>
          </div>
        </div>
        <div className="des">
          <div className="head">
            <p>Description</p>
          </div>
          <TextTruncate
            line={3}
            truncateText="..."
            text={this.props.description}
          />
        </div>
        <div className="icon">
          <div style={{ margin: "0 auto 0 auto", width: "fit-content" }}>
            <img
              src={editicon}
              style={{
                width: "18px",
                cursor: "pointer"
              }}
              onClick={() => this.props.history.push("/car/" + this.props.id)}
            />
          </div>
          <div style={{ margin: "0 auto 0 auto", width: "fit-content" }}>
            <img
              src={binicon}
              style={{
                width: "20px",
                cursor: "pointer"
              }}
              onClick={() => this.setState({ show: true })}
            />
          </div>
        </div>
        <div className="price">
          <p>{this.props.pricePerDay}฿/Day</p>
        </div>
        <Modal show={this.state.show && this.props.isRented}>
          <Modal.Header>
            <Modal.Title>Alert</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <p style={{ marginRight: "auto" }}>
              {this.props.brand} {this.props.LNumber} is being rented
            </p>
            <Button
              variant="secondary"
              onClick={() => this.setState({ show: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show && !this.props.isRented}>
          <Modal.Header>
            <Modal.Title>Alert</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <p style={{ marginRight: "auto" }}>
              Are you sure to remove {this.props.brand} {this.props.LNumber} ?
            </p>
            <Button variant="outline-danger" onClick={this.handleDelete}>
              Remove
            </Button>
            <Button
              variant="secondary"
              onClick={() => this.setState({ show: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Car);

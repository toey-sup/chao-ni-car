
import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Button,
  FormLabel,
  Row,
  Col
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./QueryFilter.css";

class QueryFilter extends Component {
  state = {
    fromDate: null,
    toDate: null
  };

  onChangeHandler(e, state) {
    const oldState = { ...this.state };
    oldState[state] = e.target.value;
    this.setState(oldState);
  }
  dateChangeHandler(date, target) {
    const oldState = { ...this.state };
    oldState[target] = date;
    this.setState(oldState);
    console.log(this.state);
  }

  render() {
    return (
      <Form>
        <FormGroup controlId={this.props.controlId}>
          <FormLabel>
            <strong>Choose Date</strong>
          </FormLabel>
          <Row>
            <Col sm={6}>
              From Date:{" "}
              <DatePicker
                selected={this.state.fromDate}
                onChange={date => this.dateChangeHandler(date, "fromDate")}
                isClearable
              />
            </Col>
            <Col sm={6}>
              To Date:{" "}
              <DatePicker
                selected={this.state.toDate}
                onChange={date => this.dateChangeHandler(date, "toDate")}
                isClearable
              />
            </Col>
          </Row>
        </FormGroup>
        <Button
          onClick={() => this.props.change(this.state)}
          variant="danger"
          style={{ width: "100%" }}
        >
          Search
        </Button>
      </Form>
    );
  }
}

export default QueryFilter;

import React, { Component } from "react";
import { Form, FormGroup, Button, FormLabel, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./QueryFilter.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { DateRangePicker } from "react-dates";

class QueryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: null,
      toDate: null,
      focusedInput: null
    };
  }

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
      <Form className="textcolor">
        <FormGroup controlId={this.props.controlId}>
          <div>
            <DateRangePicker
              startDateId="startDate"
              endDateId="endDate"
              startDate={this.state.fromDate}
              endDate={this.state.toDate}
              onDatesChange={({ startDate, endDate }) => {
                this.setState({ fromDate: startDate, toDate: endDate });
              }}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => {
                this.setState({ focusedInput });
              }}
            />
          </div>
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

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
              form
              onDatesChange={({ startDate, endDate }) => {
                if (startDate) {
                  var startDateUTC = startDate.utcOffset(0);
                  startDateUTC.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                }
                if (endDate) {
                  var endDateUTC = endDate.utcOffset(0);
                  endDateUTC.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                }

                this.setState({ fromDate: startDateUTC, toDate: endDateUTC });
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

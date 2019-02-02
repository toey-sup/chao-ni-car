import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';

class QueryFilter extends Component {
    state = {
        location: ''
    }

    onChangeHandler(e, state) {
        const oldState = { ...this.state }
        oldState[state] = e.target.value;
        this.setState(oldState);
    }

    render() {
        return (
            <Form>
                <FormGroup controlId={this.props.controlId}>
                    <FormControl
                        placeholder="Select Location"
                        value={this.state.location}
                        onChange={(event) => this.onChangeHandler(event, "location")}
                    />
                    <FormLabel><strong>Choose Date</strong></FormLabel>
                </FormGroup>
                <Button onClick={() => this.props.change(this.state)} variant="danger" style={{width:'100%'}}>Search</Button>
            </Form >
        );
    }

}

export default QueryFilter;

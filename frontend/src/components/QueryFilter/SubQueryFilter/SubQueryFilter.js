import React, { Component } from "react";
import { Container, Button, Collapse, Row, Col, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import classes from './SubQueryFilter.module.css';

class SubQueryFilter extends Component {
    state = {
        open: false,
        fromLoc: '',
        toLoc: ''
    }

    onChangeHandler(e, state) {
        const oldState = { ...this.state }
        oldState[state] = e.target.value;
        this.setState(oldState);
    }

    onQuery = () => {

        const payload = {
            fromLoc: this.state.fromLoc,
            toLoc: this.state.toLoc
        }
        this.props.handler(payload);
    }

    render() {
        const { open } = this.state;
        return (
            <>
                <div style={{ margin: '0 auto', textAlign: 'right' }}><Button
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    variant="danger"
                    size='sm'
                >Filter</Button></div>
                <Collapse in={this.state.open}>
                    <div className={classes.Div}>
                        <Container>
                            <Form>
                                <FormGroup controlId={this.props.controlId}>
                                    <Row>
                                        <Col sm={6}><FormLabel>สถานที่ที่ต้องการรับรถ</FormLabel>
                                            <FormControl
                                                size='sm'
                                                type="text"
                                                value={this.state.fromLoc}
                                                placeholder="Enter location"
                                                onChange={(e) => this.onChangeHandler(e, 'fromLoc')}
                                            /></Col>
                                        <Col sm={6}>
                                            <FormLabel>สถานที่ที่ต้องการส่งรถ</FormLabel>
                                            <FormControl
                                                size='sm'
                                                type="text"
                                                value={this.state.toLoc}
                                                placeholder="Enter location"
                                                onChange={(e) => this.onChangeHandler(e, 'toLoc')}
                                            />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <div style={{ textAlign: 'right' }}><Button onClick={this.onQuery} variant="danger" style={{ width: '100px' }}>Query</Button></div>
                            </Form >
                        </Container>
                    </div>
                </Collapse>
            </>
        );
    }
}

export default SubQueryFilter;
import React, { Component } from "react";
import { Container, Button, Collapse, Row, Col, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import classes from './SubQueryFilter.module.css';

class SubQueryFilter extends Component {
    state = {
        open: false,
        fromLoc: '',
        toLoc: '',
        gear: '',
        seat: 0
    }

    onChangeHandler(e, state) {
        const oldState = { ...this.state }
        oldState[state] = e.target.value;
        this.setState(oldState);
    }

    onChangeHandlerNumber(e, state) {
        const oldState = { ...this.state }
        oldState[state] = +e.target.value;
        this.setState(oldState);
        //console.log(+e.target.value);
    }

    onQuery = () => {

        const payload = {
            fromLoc: this.state.fromLoc,
            toLoc: this.state.toLoc,
            gear: this.state.gear,
            seat: this.state.seat,
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
                                    <Row>
                                        <Col>
                                            <Form.Label>ประเภทเกียร์</Form.Label>
                                            <Form.Control as="select" value={this.state.gear} onChange={(e) => this.onChangeHandler(e, 'gear')}>
                                                <option value=''>All</option>
                                                <option value='auto'>Auto</option>
                                                <option value='manual'>Manual</option>
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Label>จำนวนที่นั่ง</Form.Label>
                                            <Form.Control as="select" value={this.state.seat} onChange={(e) => this.onChangeHandlerNumber(e, 'seat')}>
                                                <option value='0'>All</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                                <option value='20'>5+</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <div style={{ textAlign: 'right' }}><Button onClick={this.onQuery} variant="danger" style={{ width: '200px' }}>Filter Results</Button></div>
                            </Form >
                        </Container>
                    </div>
                </Collapse>
            </>
        );
    }
}

export default SubQueryFilter;
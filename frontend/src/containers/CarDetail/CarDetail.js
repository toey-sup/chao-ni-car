import React, { Component } from 'react';
import classes from './CarDetail.module.css';
import { Row, Col } from 'react-bootstrap';
import { carPic as CarPic, carDetailR as CarDetailR, carDetailMiddle as CarDetailMiddle } from './CarDetailComponents/CarDetailComponents';
import axios from 'axios';

import testPic1 from './test/img.jpg';
import testPic2 from './test/img2.jpg';
import Spinner from '../../components/UI/Spinner/Spinner';

class CarDetail extends Component {
    state = {
        loading: false,
        //all of belows will be fetched from server
        picsPath: [testPic1, testPic2],
        brand: 'None',
        type: '',
        LNumber: '',
        regYear: '',
        gear: '',
        seat: 0,
        equipment: '',
        availFrom: null,
        availTo: null,
        description: '',
        pricePerDay: null,
        deposit: null,
        error: null,
    }

    componentWillUnmount() {
        console.log('unmount')
    }
    componentDidMount() {
        // Bug
        //console.log(this.props.match.params.id);
        this.setState({ loading: true });
        axios.get('/api/cars/' + this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                const newState = {
                    ...this.state,
                    loading: false,
                    brand: res.data.brand,
                    type: res.data.type,
                    LNumber: res.data.LNumber,
                    regYear: res.data.regYear,
                    gear: res.data.gear,
                    seat: res.data.seat,
                    equipment: res.data.equipment,
                    picsPath: [res.data.photo],
                    availFrom: res.data.availFrom,
                    availTo: res.data.availTo,
                    description: res.data.description,
                    pricePerDay: res.data.pricePerDay,
                    deposit: res.data.deposit
                }
                this.setState(newState);
            })
            .catch(err => {
                this.setState({ loading: false, error: err })
            });
    }
    render() {
        let item = <Spinner />;
        if (!this.state.loading && !this.state.error) {
            item = (
                <>
                    <div className={classes.Div}>
                        <Row>
                            <Col sm={6} xs={12}><CarPic imagesPath={this.state.picsPath} /></Col>
                            <Col sm={6} xs={12}>
                                <Row><Col><CarDetailR brand={this.state.brand} type={this.state.type} /></Col></Row>
                                <CarDetailMiddle payload={this.state} />
                            </Col>
                        </Row>

                    </div>
                </>
            );
        } else if (this.state.error) {
            item = (
                <div className={classes.Div} style={{ textAlign: 'center' }}>
                    <strong>Something went wrong!</strong>
                </div>
            );
        }

        return (
            <>
                {item}
            </>
        );
    }
}

export default CarDetail;
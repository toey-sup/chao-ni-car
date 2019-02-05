import React, { Component } from 'react';
import classes from './CarDetail.module.css';
import { Row, Col } from 'react-bootstrap';
import { carPic as CarPic, carDetailR as CarDetailR } from './CarDetailComponents/CarDetailComponents';
import axios from 'axios';

import testPic1 from './test/img.jpg';
import testPic2 from './test/img2.jpg';
import Spinner from '../../components/UI/Spinner/Spinner';

class CarDetail extends Component {
    state = {
        loading: true,
        //all of belows will be fetched from server
        picsPath: [testPic1, testPic2],
        brand: 'Automobile ',
        type: this.props.match.params.id,
        error: null
    }

    componentWillUnmount() {
        console.log('unmount')
    }
    componentDidMount() {
        // Bug
        console.log(this.props.match.params.id);
        axios.get('/api/cars/' + this.props.match.params.id)
            .then(res => {
                const cars = { ...res.data };
                const newState = { ...this.state, ...cars, loading: false }
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
                <div className={classes.Div}>
                    <Row>
                        <Col xs={6}><CarPic imagesPath={this.state.picsPath} /></Col>
                        <Col xs={6}><CarDetailR brand={this.state.brand} type={this.state.type} /></Col>
                    </Row>
                </div>
            );
        } else if (this.state.error) {
            item = (
                <div className={classes.Div} style={{textAlign:'center'}}>
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
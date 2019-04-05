import React, { Component } from "react";
import { Container, Button, Collapse } from "react-bootstrap";
import classes from "./CarManagePage.module.css";
import QueryFilter from "../../components/QueryFilter/QueryFilter";
import CarCards from "../../components/CarCard/CarCards";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import SubQueryFilter from "../../components/QueryFilter/SubQueryFilter/SubQueryFilter";
import Banner from "../../images/Banner.png";
import carCards from "../../components/CarCard/CarCards"
class CarManage extends Component {
  state = {
    user: null,
    fromDate: null,
    toDate: null,
    loading: false,
    error: null,
    CARS: [],
    cars: [], //fetch from server
  }

  componentDidMount() {
    this.setState({ loading: true })
    console.log(this.state);
    const urltest = '/api/current_user'
    const url = '/api/cars'
    axios.get(url)
      .then(res => {
        console.log("OK")
        const cars = [...res.data];
        console.log(cars);
        this.setState({ cars: [...cars], CARS: [...cars], error: false, loading: false })
      })
      .catch(err => {
        console.log('error')
        this.setState({ loading: false, error: err })
      });
  }


  render() {
    let cards = <Spinner />;
    if (!this.state.loading && !this.state.error) {
      cards = <CarCards cars={this.state.cars} />;
    } else if (this.state.error) {
      cards = (
        <div style={{ textAlign: "center" }}>
          <strong>{this.state.error.message}</strong>
        </div>
      );
    }

    return (
      <>
      <div className={classes.carmanagebackground}>
          <Container>{cards}</Container>
          <div>
            
          </div>
      </div>
      </>
    );
  }
}

export default CarManage;

import React, { Component } from "react";
import { Container, Button, Collapse } from "react-bootstrap";
import classes from "./HomePage.module.css";
import QueryFilter from "../components/QueryFilter/QueryFilter";
import CarCards from "../components/CarCard/CarCards";
import axios from "axios";
import Spinner from "../components/UI/Spinner/Spinner";
import SubQueryFilter from "../components/QueryFilter/SubQueryFilter/SubQueryFilter";
import caricon from "../images/caricon.png";

class HomePage extends Component {
  state = {
    fromDate: null,
    toDate: null,
    loading: false,
    error: null,
    CARS: [],
    cars: [], //fetch from server
    //====SubQuery======
    fromLoc: '',
    toLoc: '',
    gear: '',
    seat: 0
  }

  componentDidMount() {
    this.setState({ loading: true })
    console.log(this.state);
    const url = '/api/cars?fromDate=' + this.state.fromDate + "&toDate=" + this.state.toDate
    axios.get('/api/cars')
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

  subQueryHandler = (payload) => {
    console.log(payload)
    const newState = {
      ...this.state,
      ...payload
    }
    this.setState(newState, () => this.filterItem());

    //Query ต่อ
  };

  filterItem = () => {
    const updatedCars = this.state.CARS.filter((element) => {
      if (!this.state.gear == '') {
        return element.gear.includes(this.state.gear);
      }
      if (!this.state.seat == 0) {
        return element.seat >= this.state.seat;
      }
      if (!this.state.fromLoc == '') {
        //return element.isRented
        return element.fromLoc.includes(this.state.fromLoc);
      }
      if (!this.state.toLoc == '') {
        return element.toLoc.includes(this.state.toLoc);
      }

      return true;

    });
    this.setState({ cars: updatedCars });
  }

  onChangeHandler = (payload) => {
    const newState = {
      ...this.state,
      fromDate: payload.fromDate,
      toDate: payload.toDate,
      gear: payload.gear
    }
    this.setState(newState, () => this.searchHandler()) //make search after set the state
  }


  searchHandler() {
    //ยิง GET request
    this.setState({ loading: true });
    console.log(this.state);
    const url =
      "/api/cars?fromDate=" +
      this.state.fromDate +
      "&toDate=" +
      this.state.toDate;
    axios
      .get("/api/cars")
      .then(res => {
        console.log("OK");
        const cars = [...res.data];
        console.log(cars);
        this.setState({ cars: [...cars], CARS: [...cars], error: false, loading: false })

      })
      .catch(err => {
        console.log("error");
        this.setState({ loading: false, error: err });
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
        <div className={classes.Backgroundimg}>
          <div style={{ textAlign: "center", paddingBottom: 15 }}>
            <img style={{ width: 80, height: 80 }} src={caricon} />
            <h4>FIND RENTAL CAR </h4>
            <p>Best website</p>
          </div>
          <div className={classes.Filter} style={{ textAlign: "center" }}>
            <QueryFilter change={this.onChangeHandler} />
          </div>
        </div>

        <div className={classes.Div}>
          <SubQueryFilter handler={this.subQueryHandler} />
          <Container>{cards}</Container>
        </div>
      </>
    );
  }
}

export default HomePage;

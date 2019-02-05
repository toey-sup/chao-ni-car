import React, { Component } from "react";
import { Container } from "react-bootstrap";
import classes from './HomePage.module.css';
import QueryFilter from '../components/QueryFilter/QueryFilter';
import CarCards from '../components/CarCard/CarCards';
//import CarJumbotron from '../components/Jumbotron/Jumbotron';
import axios from 'axios';
import Spinner from "../components/UI/Spinner/Spinner";
import caricon from "../images/caricon.png"
class HomePage extends Component {
  state = {
    location: '',
    fromDate: null,
    toDate: null,
    loading: false,
    error: null,
    cars: [], //fetch from server
  }

  onChangeHandler = (payload) => {
    const newState = {
      ...this.state,
      location: payload.location,
      fromDate: payload.fromDate,
      toDate: payload.toDate
    }
    this.setState(newState)
    console.log("[new state]: ", this.state)
    this.searchHandler();
  }

  searchHandler() {
    //ยิง GET request 
    this.setState({ loading: true })
    axios.get('/api/cars')
      .then(res => {
        console.log("OK")
        this.setState({ loading: false })
        const cars = [...res.data];
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
      cards = <div style={{ textAlign: 'center' }}><strong>{this.state.error.message}</strong></div>
    }
    
    return (
      <>
        <div className={classes.Backgroundimg}>
          <div style={{ textAlign: 'center',paddingBottom: 15 }}>
            <img style = {{width:80,height:80}} src={caricon}/>
            <h4>FIND RENTAL CAR </h4>
            <p>Best website</p>
          </div>
          <div className={classes.Filter} style={{ textAlign: "center" }}><QueryFilter change={this.onChangeHandler} /></div>
        </div>
        <div className={classes.Div}>
          <Container>
            {cards}
          </Container>
        </div>
      </>
    );
  }
}

export default HomePage;

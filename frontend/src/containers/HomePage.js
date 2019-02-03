import React, { Component } from "react";
import { Container } from "react-bootstrap";
import classes from './HomePage.module.css';
import QueryFilter from '../components/QueryFilter/QueryFilter';
import CarCards from '../components/CarCard/CarCards';

class HomePage extends Component {
  state = {
    location: '',
    cars: [], //fetch from server
  }

  onChangeHandler = (payload) => {
    const newState = {
      ...this.state,
      location: payload.location
    }
    this.setState(newState)
  }

  searchHandler() {
    //ยิง GET request 
  }

  render() {
    return (
      <>
        <div className={classes.Filter} style={{ textAlign: "center" }}><QueryFilter change={this.onChangeHandler} /></div>
        <div className={classes.Div}>
          <Container>
            <CarCards cars={this.state.cars}/>
          </Container>
        </div>
      </>
    );
  }
}

export default HomePage;

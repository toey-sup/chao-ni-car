import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import classes from './HomePage.module.css';
import QueryFilter from '../components/QueryFilter/QueryFilter';

class HomePage extends Component {
  state = {
    location: '',
  }

  onChangeHandler = (payload) => {
    const newState = {
      ...this.state,
      location: payload.location
    }
    this.setState(newState)
  }

  render() {
    return (
      <>
        <Navbar />
        <div className={classes.Filter} style={{ textAlign: "center" }}><QueryFilter change={this.onChangeHandler}/></div>
        <div className={classes.Div}>
          <Container>
            Generate Card รถ ออกมาตรงนี้
          </Container>
        </div>
      </>
    );
  }
}

export default HomePage;

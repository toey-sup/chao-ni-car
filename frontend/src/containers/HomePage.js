import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import classes from './HomePage.module.css';

class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className={classes.Filter} style={{ textAlign: "center" }}>QueryFilter</div>
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

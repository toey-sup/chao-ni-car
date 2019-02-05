import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./HomePage.module.css";
class HomePage extends Component {
  render() {
    function ActionLink() {
      function popUpHello(e) {
        e.preventDefault();
        console.log("The button was clicked.");
      }
    }
    return (
      <div>
        <Navbar />
        <main style={{ marginTop: "60px" }}>
          <Container>
            <Row>
              <Col />
              <Col>
                <p className={classes.red}>
                  loremdslkfgmsdjl;kfgjslkfsjddddddddkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                </p>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

export default HomePage;

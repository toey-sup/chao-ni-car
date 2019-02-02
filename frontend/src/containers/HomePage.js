import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar";
import { Container, Row, Col} from "react-bootstrap";
import classes from './HomePage.module.css';
class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
            <Row>
                <Col ><Button>Hello</Button></Col>
                <Col><p className={classes.red}>loremdslkfgmkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p></Col>

            </Row>
          
        </Container>
      </div>
    );
  }
}

export default HomePage;

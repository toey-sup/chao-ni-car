import React, {Component} from 'react';
import { Row, Col } from "react-bootstrap";
import "./ReservedPage.css";

class ReservedPage extends Component {
    render() {
        return(
            <div>
                <div className="paymentpagebackground">
                <div className="paymentcontainer">
                  <div className="rentedHeader">
                    <p className="headertext">
                        <img class="tick" src="http://chittagongit.com//images/green-tick-icon/green-tick-icon-16.jpg"/>
                        <b>Payment Successful</b>
                        <img class="tick" src="http://chittagongit.com//images/green-tick-icon/green-tick-icon-16.jpg"/>
                        <br>
                        </br>
                        <b>Transaction was created</b>
                    </p>
                    <div className="paymentcontent">
                    <img class="carIMG" src="https://mrcollection.com/wp-content/uploads/2018/07/ferrari-portofino-rosso-portofino_07.jpg"/>
                      <Row>
                        <Col>
                          <p className="highlight">
                            <b >TRANSACTION</b>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p><b>Bill from</b></p>
                          <p>Name : </p>
                          <p>Surname : </p>
                          <p>E-mail : </p>
                          <p>Tel : </p>
                        </Col>
                        <Col>
                          <p><b>Bill to</b></p>
                          <p>Name : </p>
                          <p>Surname : </p>
                          <p>E-mail : </p>
                          <p>Tel : </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="highlight">
                            <b>CAR DETAIL</b>
                          </p>
                          <p>
                            <b>BRAND :</b> 
                          </p>
                          <p>
                            <b>CAR NUMBER :</b> 
                          </p>
                          <p>
                            <b>GEAR TYPE : </b>

                          </p>
                          <p>
                            <b>SEAT :</b> 
                          </p>
                            <p>
                            <b>EQUIPMENT :</b> 
                          </p>
                        </Col>
                        <Col>
                         <p className="highlight">
                            <b>DATE</b>
                          </p>
                          <p>
                            <b>RESERVED DATE FROM:</b>
                          </p>
                          <p></p>
                          <p>
                            <b>RESERVED DATE TO:</b>
                          </p>
                          <p></p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="highlight">
                            <b>TOTAL PRICE</b>
                          </p>
                          <p>
                            {" "}
                            <b>DEPOSIT :</b> 
                          </p>
                          <p>
                           {" "}
                            <b>PRICEPERDAY :</b> 
                          </p>
                          <p>
                            {" "}
                            <b>RESERVED DAY :</b> 
                          </p>
                          <p className="greenline" />
                          <p>
                            {" "}
                            <b>Total :</b> 
                          </p>
                          <p className="greenline" />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="btnwrapper">
                         <a>
                            <button className="ackBTN">BACK</button>
                          </a>
                  
                        </Col>
                     </Row>
                    </div>
                  </div>
               </div>
              </div>
                    </div>
            

            
        )
        }
    }
    
    export default ReservedPage
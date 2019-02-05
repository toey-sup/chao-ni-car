import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col , Image} from 'react-bootstrap';
import "./AboutPage.css";

function MemberInfo(props){
    return(
        <div>
            <Row>
                <Image src={props.imgSrc} roundedCircle />
            </Row>
            <Row>
                <h3>
                    {props.name}
                </h3>
            </Row>
        </div>
        
    );
}

class AboutPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1 className="Header">Team Member</h1>
                </Row>
                <Row className="MemberRow">
                    <Col>
                        <MemberInfo name="Member1" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                    </Col>
                    <Col>
                        <MemberInfo name="Member2" imgSrc = "holder.js/171x180"/>
                    </Col>
                    <Col>
                        <MemberInfo name="Member3" imgSrc = "holder.js/171x180"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MemberInfo name="Member4" imgSrc = "holder.js/171x180"/>
                    </Col>
                    <Col>
                        <MemberInfo name="Member5" imgSrc = "holder.js/171x180"/>
                    </Col>
                    <Col>
                        <MemberInfo name="Member6" imgSrc = "holder.js/171x180"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutPage
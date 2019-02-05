import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col , Image, Card} from 'react-bootstrap';
import "./AboutPage.css";

function MemberInfo(props){
    return(
        <div>
            <Row>
                <Image src={props.imgSrc} roundedCircle className="MemberName"/>
            </Row>
            <Row>
                <h3 className="MemberName">
                    {props.name}
                </h3>
            </Row>
        </div>
        
    );
}

class AboutPage extends Component {
    render() {
        return (
            <div className="Background" style={{paddingBottom: 10}}>
                <Container>
                    <Row>
                        <h1 className="Header">Team Member</h1>
                    </Row>
                    <Row className="MemberRow">
                        <Col>
                            <div className="MemberBlock">
                                <MemberInfo name="Member1" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                            </div>
                        </Col>
                        <Col>
                            <div className="MemberBlock">
                                <MemberInfo name="Member2" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                            </div>
                        </Col>
                        <Col>
                            <div className="MemberBlock">
                                <MemberInfo name="Member3" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="MemberRow">
                        <Col>
                            <div className="MemberBlock">
                                <MemberInfo name="Member1" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                            </div>
                        </Col>
                        <Col>
                            <div className="MemberBlock">
                                <MemberInfo name="Member2" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                            </div>
                        </Col>
                        <Col>
                            <div className="MemberBlock">
                                <MemberInfo name="Member3" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutPage
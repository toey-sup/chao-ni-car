import React, {Component} from 'react';
import { Container, Row, Col , Image} from 'react-bootstrap';
import "./AboutPage.css";

function MemberInfo(props){
    return(
        <div className="MemberBlock">
            <div className="MemberImage" >
                <Image src={props.imgSrc} roundedCircle fluid/>
            </div>
            <h4 className="MemberName">
                {props.name}
            </h4>
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
                    <Row style={{paddingBottom: 20}}>
                        <Col>
                            <MemberInfo name="Satasuk Viparksinlapin" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                        </Col>
                        <Col>
                            <MemberInfo name="Supanat Wongwiwatchai" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                        </Col>
                        <Col>
                            <MemberInfo name="Nuttapon Vittayaprechapon" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <MemberInfo name="Sahapol Tongsom" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                        </Col>
                        <Col>
                            <MemberInfo name="Kitipat Teachasupinun" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                        </Col>
                        <Col>
                            <MemberInfo name="Ravipas Plitnonkiat" imgSrc = "https://cdn.pixabay.com/photo/2017/10/25/18/21/attribution-icon-2888829_960_720.png"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutPage
import React, {Component} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "./AboutPage.css";
import Profile from "../../components/ProfileCard/ProfileCard"
import back_profile1 from "../../images/back_profile1.jpg"
import back_profile2 from "../../images/back_profile2.jpeg"
import back_profile3 from "../../images/back_profile3.jpeg"
import back_profile4 from "../../images/back_profile4.jpeg"
import back_profile5 from "../../images/back_profile5.jpg"
import back_profile6 from "../../images/back_profile6.jpg"
import img_profile1 from "../../images/Kitipat.jpg"
import img_profile2 from "../../images/Satasuk.jpg"
import img_profile3 from "../../images/Supanut.jpg"
import img_profile4 from "../../images/Nuttapon.jpg"
import img_profile5 from "../../images/Sahapol.jpg"
import img_profile6 from "../../images/Ravispas.jpg"

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
                             <Profile name = "Kitipat Teachasupinun" 
                             role = "UI Developer / front-end developer" 
                             back_profile = {back_profile1} 
                             img_profile = {img_profile1}/>
                        </Col>
                        <Col>
                             <Profile name = "Satasuk Viparksinlapin" 
                             role = "PROJECT MANAGER" 
                             back_profile = {back_profile2}
                             img_profile = {img_profile2}/>
                        </Col>
                        <Col>
                             <Profile name = "Supanat Wongwiwatchai"
                              role = "PROJECT COORDINATOR" 
                             back_profile = {back_profile3}
                             img_profile = {img_profile3}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Profile name = "Sahapol Tongsom" 
                            role = "PROJECT COORDINATOR" 
                            back_profile = {back_profile5}
                            img_profile = {img_profile5}/>
                        </Col>
                        <Col>
                            <Profile name = "Nuttapon Vittayaprechapon" 
                            role = "BACKEND DEVELOPER"
                             back_profile = {back_profile4}
                             img_profile = {img_profile4}/>
                        </Col>

                        <Col>
                            <Profile name = "Ravipas Plitnonkiat" 
                            role = "FRONTEND DEVELOPER" 
                            back_profile = {back_profile6}
                            img_profile = {img_profile6}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutPage
import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import CardComponent from '../components/Card';
class LoginPage extends Component {
    render() {
        return (
            
            <div>
                <Navbar />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        )
    }
}

export default LoginPage;
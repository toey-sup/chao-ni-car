import React from 'react';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './LoginComponent.css';
import AboutPage from '../../containers/AboutPage';
import { BrowserRounter as Router, Route, Link } from 'react-router-dom'
const loginComponent = (props) => {

    return (

        <div className="Login">
            <form>
                <img
                    className="circle"
                    src="https://www.telegraph.co.uk/content/dam/news/2017/11/22/TELEMMGLPICT000147365976_trans_NvBQzQNjv4Bq3XmyF3YIL3K1caQxZsZv2Ssm-UOV8_Q90I8_c5Af0yY.jpeg?imwidth=1400"
                    alt="logo"
                    width="100"
                    height="100"
                />
                <p className="center_text">MEMBER LOGIN</p>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                    // value={this.state.email}
                    // onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        // value={this.state.password}
                        // onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <Button
                    block
                    variant="danger"
                    bsSize="large"
                    style={{ width: '40%', margin: '0 auto' }}
                    // disabled={!this.validateForm()}
                    type="submit"
                >
                    Login
          </Button>
                <p>Need an account ? </p>
                <Link to="/About">Sign Up</Link>
            </form>
            <Route path="/XXXX" component={AboutPage} />
        </div>
    );
}
export default loginComponent;
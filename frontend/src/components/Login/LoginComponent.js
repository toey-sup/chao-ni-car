import React from 'react';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './LoginComponent.css';

const loginComponent = (props) => {

    return (

        <div className="Login">
            <form>
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
                    bsSize="large"
                    style={{width:'40%',margin:'0 auto'}}
                    // disabled={!this.validateForm()}
                    type="submit"
                >
                    Login
          </Button>
            </form>
        </div>

    );
}
export default loginComponent;
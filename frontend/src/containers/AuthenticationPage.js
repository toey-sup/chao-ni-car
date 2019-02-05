import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class AuthenticationPage extends Component {
    sendProfile = () => {
        const data = {
            tel: '0815555555',
            idCardNum: '1234567890123',
            address: '25 K Village Road',
            DLicenseNumber: '65498415698491',
            isAuthenticated: true
        }
        axios.post('/api/authentication', data)
            .then(res => {
                console.log(res)
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
                //window.location = '/authentication'
            })
    }
    render() {
        return (
            <div>
                <Button onClick={this.sendProfile}>Send Profile</Button>
            </div>
        )
    }
}

export default withRouter(AuthenticationPage);
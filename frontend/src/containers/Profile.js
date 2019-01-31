import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    state = {
        current_user: null
    }
    getCurrentUser = () => {
        axios.get('/api/current_user')
            .then(response => {
                console.log('login ok')
                console.log(response.data)
                this.setState({
                    current_user: response.data.name
                })
            })
            .catch(err => {
                console.log('login error', err)
            })

    }
    render() {
        let current_user = <p>Unknown</p>
        if (this.state.current_user) {
            current_user = <p>{this.state.current_user}</p>
        }
        return (
            <div className="App">
                <button onClick={this.getCurrentUser}>get current_user</button>
                {current_user}
            </div>
        );
    }
}

export default Profile
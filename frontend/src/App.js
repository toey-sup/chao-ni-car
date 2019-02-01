import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Profile from './containers/Profile'

class App extends Component {
  render() {
    return (
      
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
          
        <header id="header-background" className="one" />
				<ul id="a">
					<li><a className="active" href="#home">Home</a></li>
					<li><a href="#Create">Create New Activity</a></li>
					<li><a href="#Attendance">Check Attendance</a></li>
					<li><a href="#View">View Created Activity</a></li>
					<li><a href="#History">History</a></li>
          <Button><p>"BUTTON"</p></Button>
				</ul>
        <Profile />
      </div>
    )
  }
}

export default App;

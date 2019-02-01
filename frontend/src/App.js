import React, { Component } from 'react';
import './App.css';

import Profile from './containers/Profile'

class App extends Component {
  render() {
    return (
      <div>
        <header id="header-background" className="one" />
				<ul id="a">
					<li><a className="active" href="#home">Home</a></li>
					<li><a href="#Create">Create New Activity</a></li>
					<li><a href="#Attendance">Check Attendance</a></li>
					<li><a href="#View">View Created Activity</a></li>
					<li><a href="#History">History</a></li>
				</ul>
        <Profile />
      </div>
    )
  }
}

export default App;

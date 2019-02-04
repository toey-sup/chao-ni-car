import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Profile from './containers/Profile'
import { Route, Switch } from 'react-router-dom'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import LoginPage from './containers/LoginPage'
import ResultPage from './containers/ResultPage'
import CarDetail from './components/CarDetail/CarDetail';
import Navbar from './components/Navbar/Navbar';
import LoginComponent from './components/Login/LoginComponent';

import testPage from './containers/testPage'

class App extends Component {
  render() {
    return (
      
      <div>
        {/* <Profile /> */}
        {/* <LoginComponent/> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/car/:id' component={CarDetail} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/result" component={ResultPage} />
          <Route path="/test" component={testPage} />
        </Switch>
      </div>
    )
  }
}

export default App;

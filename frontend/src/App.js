import React, { Component } from 'react';
import './App.css';

import Profile from './containers/Profile'
import {Route} from 'react-router-dom'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import LoginPage from './containers/LoginPage'
import ResultPage from './containers/ResultPage'

import testPage from './containers/testPage'
import authenticationPage from './containers/AuthenticationPage'

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/test" component={testPage} />
        <Route path="/authentication" component={authenticationPage} />
      </div>
    )
  }
}

export default App;

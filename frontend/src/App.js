import React, { Component } from 'react';
import './App.css';

import Profile from './containers/Profile'
import {Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/result" component={ResultPage} />
      </div>
    )
  }
}

export default App;

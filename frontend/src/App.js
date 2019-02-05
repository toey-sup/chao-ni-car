import React, { Component } from "react";
import "./App.css";

import Profile from "./containers/Profile";
import { Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import LoginPage from "./containers/Login";
import ResultPage from "./containers/ResultPage";
import RegisterPage from "./containers/RegisterPage";
import Navbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <RegisterPage />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/result" component={ResultPage} />
      </div>
    );
  }
}

export default App;

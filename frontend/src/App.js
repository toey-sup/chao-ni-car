import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Profile from "./containers/Profile";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import LoginPage from "./containers/LoginPage";
import ResultPage from "./containers/ResultPage";
import HowToUsePage from "./containers/HowToUsePage";
import CarDetail from "./containers/CarDetail/CarDetail";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./containers/RegisterPage";
<<<<<<< HEAD
import ManageBooking from "./containers/ManageBooking";
=======
import AddCarPage from "./containers/AddCarPage/AddCarPage"
>>>>>>> d9f20e4e287f493b7a81ec500a167f095b237ae9
import LoginComponent from "./components/Login/LoginComponent";

import testPage from "./containers/testPage";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Profile /> */}
        {/* <LoginComponent/> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/car/:id" component={CarDetail} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/result" component={ResultPage} />
          <Route path="/test" component={testPage} />
          <Route path="/howtouse" component={HowToUsePage} />
          <Route path="/regis" component={RegisterPage} />
<<<<<<< HEAD
          <Route path="/booking" component={ManageBooking} />
=======
          <Route path="/addcar" component={AddCarPage} />
>>>>>>> d9f20e4e287f493b7a81ec500a167f095b237ae9
        </Switch>
      </div>
    );
  }
}

export default App;

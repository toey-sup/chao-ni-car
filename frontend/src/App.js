import React, { Component } from "react";
import classes from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/AboutPage/AboutPage";
import LoginPage from "./containers/LoginPage/LoginPage";
import ResultPage from "./containers/ResultPage";
import HowToUsePage from "./containers/HowToPage/HowToUsePage";
import CarDetail from "./containers/CarDetail/CarDetail";
import Navbar from "./components/Navbar/Navbar";
import AddCarPage from "./containers/AddCarPage/AddCarPage";
import CarManagePage from "./containers/CarManagePage/CarManagePage";
import PaymentPage from "./containers/PaymentPage/PaymentPage";
import SelectRole from "./containers/RegisterPage/SelectRolePage";
import RegisterRenter from "./containers/RegisterPage/RegisterRenterPage";
import RegisterCarOwner from "./containers/RegisterPage/RegisterCarOwnerPage";
import ManageBooking from "./containers/ManageBookingPage/ManageBooking";
import ReservedPage from "./containers/ReservedPage/ReservedPage";
import ProfilePage from "./containers/ProfilePage/ProfilePage"

import { connect } from "react-redux";
import * as actions from "./store/actions/";
import { withRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.storeLogin();
  }
  render() {
    return (
      <div className={classes.background}>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/car/:id" component={CarDetail} />
            <Route path="/about" component={AboutPage} />
            <Route path="/result" component={ResultPage} />
            <Route path="/howtouse" component={HowToUsePage} />
            <Route path="/regis" component={SelectRole} />
            <Route path="/addcar" component={AddCarPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/carmanage" component={CarManagePage} />
            <Route path="/payment/:id" component={PaymentPage} />
            <Route path="/regisrenter" component={RegisterRenter} />
            <Route path="/regiscarowner" component={RegisterCarOwner} />
            <Route path="/managebooking" component={ManageBooking} />
            <Route path="/reserved" component={ReservedPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    actions
  )(App)
);

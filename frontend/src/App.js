import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/AboutPage/AboutPage";
import LoginPage from "./containers/LoginPage/LoginPage";
import ResultPage from "./containers/ResultPage";
import HowToUsePage from "./containers/HowToPage/HowToUsePage";
import CarDetail from "./containers/CarDetail/CarDetail";
import Navbar from "./components/Navbar/Navbar";
import AddCarPage from "./containers/AddCarPage/AddCarPage";
import testPage from "./containers/test/testPage";
import CarManagePage from "./containers/CarManagePage/CarManagePage";
import PaymentPage from './containers/PaymentPage/PaymentPage';
import SelectRole from './containers/RegisterPage/SelectRolePage';
import RegisterRenter from './containers/RegisterPage/RegisterRenterPage';
import RegisterCarOwner from './containers/RegisterPage/RegisterCarOwnerPage';

import { connect } from 'react-redux';
import * as actions from './store/actions/login';
import { withRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.storeLogin()
  }
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/car/:id" component={CarDetail} />
            <Route path="/about" component={AboutPage} />
            <Route path="/result" component={ResultPage} />
            <Route path="/test" component={testPage} />
            <Route path="/howtouse" component={HowToUsePage} />
            <Route path="/regis" component={SelectRole} />
            <Route path="/addcar" component={AddCarPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/carmanage" component={CarManagePage} />
            <Route path="/payment/:id" component={PaymentPage} />
            <Route path="/regisrenter" component={RegisterRenter}/>
            <Route path="/regiscarowner" component={RegisterCarOwner}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(App));

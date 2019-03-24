import React from 'react';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './LoginComponent.css';
import AboutPage from '../../containers/AboutPage';
import { BrowserRounter as Router, Route, Link } from 'react-router-dom'
const loginComponent = (props) => {

    return (

        <div class="wrapper fadeInDown">
        <div id="formContent">
      
          <h2 class="active"> Sign In </h2>
      
      
          <div class="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
          </div>
      
          
          <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
            <input type="submit" class="fadeIn fourth" value="Log In"/>
          </form>
      
          <div id="formFooter">
          <h2 class="inactive underlineHover">Sign Up </h2>
          </div>
      
        </div>
      </div>
    );
}
export default loginComponent;
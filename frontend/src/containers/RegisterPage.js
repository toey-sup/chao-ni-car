import React, { Component } from "react";
import "./RegisterPage.css";
import renter from "../images/renter.png";
import user from "../images/Cars.png";
import axios from "axios";
import { text } from "@fortawesome/fontawesome-svg-core";
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val => {
    val === "" && (valid = false);
  });
  return valid;
};

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      id: "",
      drivingnumber: "",
      tel: "",
      formvalid: null,
      stage: false,
      chosen: false,
      formErrors: {
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        id: "",
        drivingnumber: "",
        tel: ""
      }
    };
  }
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    this.validateField(name, value);
  };

  validateField(fieldName, value) {
    let formErrors = this.state.formErrors;

    switch (fieldName) {
      case "name":
        console.log(formErrors.name, value);
        formErrors.name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "surname":
        formErrors.surname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? ""
          : "invalid email";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "confirmpassword":
        formErrors.confirmpassword =
          value === this.state.password
            ? ""
            : "confirm password and password are not matching";
        break;
      case "id":
        formErrors.id = value.length === 13 ? "" : "invalid id number";
        break;
      case "drivingnumber":
        formErrors.drivingnumber =
          value.length === 10 ? "" : "invalid driving number";
        break;
      case "tel":
        formErrors.tel = value.length === 10 ? "" : "invalid telephone number";
        break;
      default:
        break;
    }
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  handleSubmit = e => {
    e.preventDefault();
    let data={}
    if(this.state.chosen === true){
    data = {
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      idCardNum: this.state.id,
      tel: this.state.tel,
      isAuthenticated: true
    };
  }
  else{
     data = {
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      idCardNum: this.state.id,
      DLicenseNumber: this.state.drivingnumber,
      tel: this.state.tel,
      isAuthenticated: true
    };
  }
    axios
      .post("/auth/local", data)
      .then(res => {
        console.log(res);
        //this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });

  };
  render() {
    const { formErrors } = this.state;
    const handleClickrenter = () => {
      this.setState({
        chosen: true,
        renter: true
      });
    };

    const handleClickuser = () => {
      this.setState({
        chosen: true,
        user: true
      });
    };

    let display = <p />;
    let user = <p />;
    if (this.state.user === true) {
      user = (
        <div className="drivingnumber">
          <label htmlFor="drivingnumber">Driver Card Number</label>
          <input
            className={formErrors.drivingnumber.length > 0 ? "error" : null}
            placeholder="Driver Card Number"
            type="text"
            name="drivingnumber"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.drivingnumber.length > 0 && (
            <span className="errorMessage">{formErrors.drivingnumber}</span>
          )}
        </div>
      );
    }
    if (this.state.chosen === true) {
      display = (
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="name">
              <label htmlFor="name">First Name</label>
              <input
                className={formErrors.name.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.name}</span>
              )}
            </div>
            <div className="surname">
              <label htmlFor="surname">Last Name</label>
              <input
                className={formErrors.surname.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="surname"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.surname.length > 0 && (
                <span className="errorMessage">{formErrors.surname}</span>
              )}
            </div>
            <div className="username">
              <label htmlFor="username">User Name</label>
              <input
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="User Name"
                type="text"
                name="username"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="confirmpassword">
              <label htmlFor="confirmpassword">Confirm Your Password</label>
              <input
                className={
                  formErrors.confirmpassword.length > 0 ? "error" : null
                }
                placeholder="Confirm Password"
                type="text"
                name="confirmpassword"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.confirmpassword.length > 0 && (
                <span className="errorMessage">
                  {formErrors.confirmpassword}
                </span>
              )}
            </div>
            <div className="id">
              <label htmlFor="id">ID Number</label>
              <input
                className={formErrors.id.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="id"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.id.length > 0 && (
                <span className="errorMessage">{formErrors.id}</span>
              )}
            </div>
            {user}
            <div className="tel">
              <label htmlFor="tel">Telephone Number</label>
              <input
                className={formErrors.tel.length > 0 ? "error" : null}
                placeholder="Telephone Number"
                type="text"
                name="tel"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.tel.length > 0 && (
                <span className="errorMessage">{formErrors.tel}</span>
              )}
            </div>
            <div className="term">
            <label > I agree to the Terms and Agreements</label>
              <input
                
                type="checkbox"
                name="checkbox"
                required
                style={{ display: "flex" }}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
            </div>
          </form>
        </div>
      );
    } else {
      display = (
        <div
          className="choseImage"
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch"
          }}
        >
          <div className="renter" onClick={() => handleClickrenter()}>
            <div className="rentertext">
              <p>RENTER</p>
            </div>
          </div>
          <div className="user" onClick={() => handleClickuser()}>
            <div className="usertext">
              <p>USER</p>
            </div>
          </div>
        </div>
      );
    }
    return <div className="wrapper">{display}</div>;
  }
}

export default RegisterPage;

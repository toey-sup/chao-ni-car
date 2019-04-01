import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/login';
import "./Payment.css";

class Payments extends Component {

  render() {
    return (
      <StripeCheckout
        name="Cao-Ni-Car"
        description={this.props.price + " Baht"}
        amount={this.props.price*100/34}
        token={token => this.props.handleToken(token, this.props.requestID)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="paybtn">
          Pay with creditcard
        </button>
      </StripeCheckout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user,
    rent: state.rent
  }
};

export default connect(mapStateToProps)(connect(null, actions)(Payments));
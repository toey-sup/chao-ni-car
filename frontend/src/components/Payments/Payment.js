import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/login';
import "./Payment.css"
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Cao-Ni-Car"
        description="5 Baht"
        amount={500}
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

export default connect(null, actions)(Payments);
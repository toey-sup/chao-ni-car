import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/login';

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
        <button className="btn">
          Transfer money with credit card
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
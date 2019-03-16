import React, {Component} from 'react'
import Payment from '../components/Payments/Payment'

class PaymentPage extends Component {
    render() {
        return (
            <div>
                <Payment requestID="1234"/>
            </div>
        )
    }
}

export default PaymentPage;
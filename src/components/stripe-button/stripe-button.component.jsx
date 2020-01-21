import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-buttom/custom-button.component';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_gd2TuAkIjTBJa1HOPQhG2JeB003svCQHtZ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }
    return (
        <StripeCheckout
            name="Urban Clothing"
            lable="Pay Now"
            image="https://svgshare.com/i/HTg.svg"
            billingAddress
            currency="INR"
            shippingAddress
            description={`Your total is \u20B9${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        ><CustomButton>Pay Now</CustomButton></StripeCheckout>
    )
}

export default StripeCheckoutButton
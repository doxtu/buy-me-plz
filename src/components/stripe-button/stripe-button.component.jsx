import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publicKey = 'pk_test_51H89sQBuc1htX1t3apIwJFTtNYuGeT4KGtqhl5T94fGWMc1tvbzyRRJQjijfMWvkhqDOiDXRN8w2uv1hFOaRkg4l000CYNnpE4';

    return (
        <StripeCheckout
            name='BUY NOW PLZ'
            label='Pay Now'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={token => alert('Payment Successful!')}
            stripeKey={publicKey} 
        />
    )
}

export default StripeCheckoutButton;
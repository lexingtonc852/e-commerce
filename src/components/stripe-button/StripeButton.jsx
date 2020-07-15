import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export function StripeCheckoutButton({ price }){
    const priceForStripe = price * 100; // Stripe want price in Cent
    const publishableKey = 	'pk_test_51H55NUIfXM148phHdV1krFoxq0WCOrmv3JirIFlXHF0KVPcXwaq2KCpi1kTF84QaDZhwt17Iha55semAFNsVZjtu00wsVaeu08';
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
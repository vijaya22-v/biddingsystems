import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
export default function Checkout1() {

    const onToken = (token) => {
        console.log(token);
    }

  return (
    <div>
        <StripeCheckout
        token={onToken}
        name="Binaclores"
        currency='Inr'
        amount='4500'
        stripeKey="pk_test_51N4PLTSFYuV5G1lAlg9zPbmRqaWyyidtsQxnnf6MIJkTn4MS1WVUZ0bCVUdA29ozcauknOpStcN92oz1KmJ12bLS00dVChy0nH"
      />
    </div>
  )
}

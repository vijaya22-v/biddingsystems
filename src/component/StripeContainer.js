import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
const PUBLIC_KEY = "pk_test_51N4PLTSFYuV5G1lAlg9zPbmRqaWyyidtsQxnnf6MIJkTn4MS1WVUZ0bCVUdA29ozcauknOpStcN92oz1KmJ12bLS00dVChy0nH"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <>
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
    </>
  )
}

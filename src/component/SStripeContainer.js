import React, { useState } from 'react'
import StripeContainer from './StripeContainer'
export default function SStripeContainer() {

    const [showItem, setShowItem] = useState(false)

  return (
    <div>
        <h1 className='changecolor'>THE BINACLORES</h1>
        {showItem ? <StripeContainer /> : <><h3 className='changecolor'>$100</h3><br/><div className='stripeimg'><img src='assets/binaclore1.jpg' height='100' /> </div>
         <button onClick={() => setShowItem(true)}>BUY NOW</button> </> }
    </div>
  )
}

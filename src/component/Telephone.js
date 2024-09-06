import React from 'react'

export default function Telephone() {
  return (
    <div className='bbbody'>
        <article className='blog-post'>
            <div className='blog-post_img'>
                <img src='/assets/telephone.jpg' alt='' />
            </div>
            <div className='blog-post_info'>
                <div className='blog-post_date'> 
                    <span>AUCTION</span>
                    <span>Last Date: 23/03/2023</span>
                    <span>Starting Bid: $50 USD</span>
                </div>
                <h2 className='blog-post_title'>Copper Telephone</h2>
                <p>Antique Telephone copper resin table ascent</p>
                <p>This is the Copper Telephone Was Used By British Colnel MK.Frederich After The Independence This Telephoe Was Placed In Jaipur Muesuem Now It is Going For The Auction</p>
                <input placeholder='Bid Now'  /> <br/>
                <a href='#' className='blog-post_cta'>Send Bid</a>
            </div>
        </article>
        </div>
  )
}

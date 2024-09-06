import React from 'react'

export default function Bridge() {
  return (
    <div className='bbbody'>
        <article className='blog-post'>
            <div className='blog-post_img'>
                <img src='/assets/bridge.jpg' alt='' />
            </div>
            <div className='blog-post_info'>
                <div className='blog-post_date'> 
                    <span>AUCTION</span>
                    <span>Last Date: 23/03/2023</span>
                </div>
                <h2 className='blog-post_title'>BRIDGE</h2>
                <p>Government is planning to construct a bridge in Guntur district Biddings are now started.</p>
                <p>This is located in Guntur district vaddeshwaram. River length is 250 meters </p>
                <input placeholder='Bid Now'  /> <br/>
                <a href='#' className='blog-post_cta'>Send Bid</a>
            </div>
        </article>
        </div>
  )
}

import React, { useState } from 'react'
import Confirm from './Confirm';
import Data from './Data';
import { Component, PropTypes } from 'react';
export default function Binaclore() {
const[id, idchange] = useState('');
const[name, namechange] = useState('');
const handlesubmit = (e)=>{
    e.preventDefault();
    const empobj = {id,name};
    console.log(empobj);
}

  return (
    <div className='bbbody'>
        <form  className='blog-post' onSubmit={handlesubmit}>
            <div className='blog-post_img'>
                <img src='/assets/binaclore1.jpg' alt='' />
            </div>
            <div className='blog-post_info'>
                <div className='blog-post_date'> 
                    <span>AUCTION</span>
                    <span>Last Date: 23/03/2023</span>
                    <span>Starting Bid: $45 USD</span>
                </div>
                <h2 className='blog-post_title'>MUGHAL BINACLORE</h2>
                <p>Brass Brown Antic Royal Binaclore</p>
                <p>This is the binaclore used by mughal emporor. Recently got by a famous archeologist. Had a high demand from Northern India. Probably Belong to 16th Century</p>
                <div className='binp'>
                <input placeholder='id' value={id} onChange={e=>idchange(e.target.value)} /> <br/>
                <input placeholder='Bid Now' value={name} onChange={e=>namechange(e.target.value)}  /> <br/>
                </div>
                <submit type='submit' onClick={handlesubmit}>PLACE BID</submit>
            </div>
        </form>
        </div>
  )
}

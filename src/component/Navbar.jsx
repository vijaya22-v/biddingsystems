import React from 'react'
import {NavLink, NavDropdown, Form, FormControl,Button} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import Auction from './Auction'
import Home from './Home'
//import { NavLink } from 'react-router-dom'
export default function Navbar1() {

  return (
   <nav className='nav'>
      <a href='/' className='site-title' >BIDDING SYSTEMS</a>
      <ul>
      <li className='active'>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/auction'>Auction</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/about'>About Us</a>
        </li>
        
      </ul>
   </nav>
  )
}

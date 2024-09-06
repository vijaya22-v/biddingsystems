import React from "react";
import {NavLink, NavDropdown, Form, FormControl,Button} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import Auction from './Auction'
import Vedio from "./Vedio";
import Homefoot from "./Homefoot";
import Enavbar from "./Enavbar";
import Ehome from "./Ehome";
import Eproduct from "./Eproduct";
import Move from "./Move";
import Move1 from "./Move1";
import RedirectGame from "./RedirectGame";
import Move4 from "./Move4";
export default function Home() {
  return (
    <>

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






    <div className="hero">
      <div class="card text-bg-dark text-white border-0">
        <img src="/assets/bg992.jpg" class="card-img" alt="Background" height="700px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">

            </div>
          <h5 class="card-title display-3 fw-bolder  mb-0">THE BIDDING</h5>
          <p class="card-text lead fs-2">
               Make Your Bid...
          </p>
        </div>
      </div>
    </div>
   <Move1 />
   <Move />
   <Move4 />
    <RedirectGame />
    </>
  );
}

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import More1 from './component/More1';
import Auction from './component/Auction';
import { Component } from 'react';
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Anticsauction from './component/Anticsauction';
import Binaclore from './component/Binaclore';
import Telephone from './component/Telephone';
import Governmentbids from './component/Governmentbids';
import Bridge from './component/Bridge';
import UserDetails from './component/userDetails';
import Formdata from './component/Formdata';
import Data from './component/Data';
import Confirm from './component/Confirm';
import Chatbot from './component/Chatbot';
import Game from './component/Game';
import AuctionGame from './component/AuctionGame';
import Vedio from './component/Vedio';
import Checkout1 from './component/Checkout1';
import StripeContainer from './component/StripeContainer';
import SStripeContainer from './component/SStripeContainer';
import Move from './component/Move';
import Explore from './component/Explore';
function App() {
  
  return(
    <>
    <diV>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auction' element={<Auction />} />
         <Route path='/contact' element={<Contact />} />  
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/anticsauction' element={<Anticsauction />} />
        <Route path='/binaclore' element={<Binaclore />} />
        <Route path='/telephone' element={<Telephone />} />
        <Route path='/governmentbids' element={<Governmentbids />} />
        <Route path='/bridge' element={<Bridge />} />
        <Route path='/userDetails' element={<UserDetails />} />
        <Route path='/form' element={<Formdata />} />
        <Route path='/data' element={<Data />} />
        <Route path='/confirm' element={<Confirm />} />
        <Route path='/chat' element={<Chatbot />} />
        <Route path='/game' element={<Game />} />
        <Route path='/aucgame' element={<AuctionGame />} />
        <Route path='/co' element={<Checkout1 />} />
        <Route path='/c' element={<StripeContainer />} />
        <Route path='/binaclorecheckout' element={<SStripeContainer />} />
        <Route path='/exploreproducts' element={<Explore />} />
      </Routes>
    </diV>
    </>
  )
}

export default App;

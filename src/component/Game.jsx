
import React, { useState, useEffect } from "react";
export default function Auction() {
    // Set the starting price and the increment for the auction
    const STARTING_PRICE = 100;
    const INCREMENT = 10;
  
    // Set the maximum number of bids for each person
    const MAX_BIDS = 3;
  
    // Initialize the state variables for the auction
    const [currentPrice, setCurrentPrice] = useState(STARTING_PRICE);
    const [bidder1Bids, setBidder1Bids] = useState(MAX_BIDS);
    const [bidder2Bids, setBidder2Bids] = useState(MAX_BIDS);
    const [bidder1Price, setBidder1Price] = useState(0);
    const [bidder2Price, setBidder2Price] = useState(0);
    const [winner, setWinner] = useState(null);
  
    // Set up a timer to handle the bidding process
    useEffect(() => {
      let timerId = setInterval(() => {
        if (bidder1Bids > 0 && bidder2Bids > 0) {
          // Get the bid from the first bidder
          let bidder1Bid = prompt(`Bidder 1, enter your bid (current price: ${currentPrice}, ${bidder1Bids} bids left):`);
          bidder1Bid = parseInt(bidder1Bid);
  
          // Validate the bid
          if (bidder1Bid >= currentPrice + INCREMENT) {
            setCurrentPrice(bidder1Bid);
            setBidder1Price(bidder1Bid);
            setBidder1Bids(bidder1Bids - 1);
          } else {
            alert(`Bid must be at least ${currentPrice + INCREMENT}.`);
          }
  
          // Check if the auction is over
          if (bidder1Bids === 0 || bidder2Bids === 0) {
            setWinner(bidder1Bids === 0 ? "Bidder 2" : "Bidder 1");
            clearInterval(timerId);
            displayResults();
            return;
          }
        }
  
        if (bidder1Bids > 0 && bidder2Bids > 0) {
          // Get the bid from the second bidder after 3 seconds
          setTimeout(() => {
            let bidder2Bid = prompt(`Bidder 2, enter your bid (current price: ${currentPrice}, ${bidder2Bids} bids left):`);
            bidder2Bid = parseInt(bidder2Bid);
  
            // Validate the bid
            if (bidder2Bid >= currentPrice + INCREMENT) {
              setCurrentPrice(bidder2Bid);
              setBidder2Price(bidder2Bid);
              setBidder2Bids(bidder2Bids - 1);
            } else {
              alert(`Bid must be at least ${currentPrice + INCREMENT}.`);
            }
  
            // Check if the auction is over
            if (bidder1Bids === 0 || bidder2Bids === 0) {
              setWinner(bidder1Bids === 0 ? "Bidder 2" : "Bidder 1");
              clearInterval(timerId);
              displayResults();
              return;
            }
          }, 3000);
        }
      }, 0);
  
      return () => clearInterval(timerId);
    }, [bidder1Bids, bidder2Bids]);
  
}
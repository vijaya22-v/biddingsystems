import React, { useState } from 'react';
export default function Chatbot() {

    const [player1Bid, setPlayer1Bid] = useState(0);
    const [player2Bid, setPlayer2Bid] = useState(0);
    const [currentBid, setCurrentBid] = useState(0);
    const [winningPlayer, setWinningPlayer] = useState(null);
  
    function handlePlayer1Bid() {
      const newBid = player1Bid + 1;
      setPlayer1Bid(newBid);
      setCurrentBid(newBid);
      setWinningPlayer(1);
    }
  
    function handlePlayer2Bid() {
      const newBid = player2Bid + 1;
      setPlayer2Bid(newBid);
      setCurrentBid(newBid);
      setWinningPlayer(2);
    }
  
    return (
      <div>
        <h2>Current Bid: {currentBid}</h2>
        {winningPlayer && <p>Player {winningPlayer} is winning!</p>}
        <button onClick={handlePlayer1Bid}>Player 1 Bid</button>
        <button onClick={handlePlayer2Bid}>Player 2 Bid</button>
      </div>
    );
}

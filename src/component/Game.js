import React, { useState } from "react";
import Player from "./Player";

function Game() {
  const [player1Bid, setPlayer1Bid] = useState(0);
  const [player2Bid, setPlayer2Bid] = useState(0);

  const handlePlayer1Bid = (newBid) => {
    if (newBid > player2Bid) {
      setPlayer1Bid(newBid);
    }
  };

  const handlePlayer2Bid = (newBid) => {
    if (newBid > player1Bid) {
      setPlayer2Bid(newBid);
    }
  };

  return (
    <div>
      <h1>Auction Game</h1>
      <Player name="Player 1" onBid={handlePlayer1Bid} />
      <Player name="Player 2" onBid={handlePlayer2Bid} />
      <p>Current highest bid: {Math.max(player1Bid, player2Bid)}</p>
    </div>
  );
}

export default Game;

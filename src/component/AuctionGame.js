import React, { useState, useEffect } from 'react';

const Auction = () => {
  const [player1Bid, setPlayer1Bid] = useState(0);
  const [player2Bid, setPlayer2Bid] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval = null;

    if (timer === 0) {
      if (currentPlayer === 1) {
        setWinner(2);
      } else {
        setWinner(1);
      }
    } else {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, currentPlayer]);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    if (currentPlayer === 1) {
      setPlayer1Bid(parseInt(e.target.bid.value));
      setCurrentPlayer(2);
    } else {
      setPlayer2Bid(parseInt(e.target.bid.value));
      setCurrentPlayer(1);
    }
    setTimer(10);
  }

  return (
    <div className='gamebody'>
      {winner ? (
        <h2>Player {winner} wins with bid of {winner === 1 ? player1Bid : player2Bid}!</h2>
      ) : (
        <div>
          <h2>Current Bid: {currentPlayer === 1 ? player1Bid : player2Bid}</h2>
          <h3>Player {currentPlayer}'s turn to bid. Time left: {timer} seconds.</h3>
          <form onSubmit={handleBidSubmit}>
            <input type="number" name="bid" required />
            <button type="submit">Submit Bid</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Auction;

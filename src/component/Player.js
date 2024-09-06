import React, { useState, useEffect } from "react";

function Player({ name, onBid }) {
  const [bid, setBid] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      onBid(bid);
    }

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleBidChange = (event) => {
    const newBid = Number(event.target.value);
    setBid(newBid);
  };

  const handleBidSubmit = (event) => {
    event.preventDefault();
    onBid(bid);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Current bid: {bid}</p>
      <p>Time left: {timeLeft} seconds</p>
      <form onSubmit={handleBidSubmit}>
        <input type="number" value={bid} onChange={handleBidChange} />
        <button type="submit">Place Bid</button>
      </form>
    </div>
  );
}

export default Player;

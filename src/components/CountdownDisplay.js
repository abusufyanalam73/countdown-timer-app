import React from "react";

const CountdownDisplay = ({ timeLeft }) => {
  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{timeLeft}</p>
    </div>
  );
};

export default CountdownDisplay;

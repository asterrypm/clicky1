import React from "react";

export const Score = props => (
  <header>
    <div className='score'>Score: {props.score} | Top Score: {props.topScore}</div>
  </header>
);
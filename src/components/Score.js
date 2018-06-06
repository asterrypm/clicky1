import React from "react";

export const Score = props => (
  <header>
    <div>Score: {props.score} | Top Score: {props.topScore}</div>
  </header>
);
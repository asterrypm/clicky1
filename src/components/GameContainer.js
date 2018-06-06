import React, { Component } from 'react';
import { CardsContainer } from './CardsContainer';
import { Score } from './Score';

export class GameContainer extends Component {
  state = {
    clicked: [],
    score: 0,
    topScore: 0
  }

  handleClick = (id) => {
    console.log(`${id} was just clicked`)
    if (this.wasPreviouslyClicked(id)) {
      // reset score to 0
      this.resetScore();
      // reset history clicked
      this.resetHistory();
    } else {
      // add to previously clicked
      this.addToClicked(id);
      // increment score
      this.incrementScore();
    }
  }

  // return a boolean: true/false
  wasPreviouslyClicked = (id) => {
    // look in clicked array to see if id is there
    return this.state.clicked.includes(id);
  }

  incrementScore = () => {
    // find out how much the previous score was
    const prevScore = this.state.score;
    // set state to new score
    this.setState({
      score: prevScore + 1
    }, this.conditionallySetTopScore)
  }

  conditionallySetTopScore = () => {
    const score = this.state.score;
    if (score > this.state.topScore) {
      // update topScore
      this.setState({
        topScore: score
      });
    }
  }

  addToClicked = (id) => {
    // find out previous clicked state
    const nextClicked = this.state.clicked.concat(id);
    // set new clicked state
    this.setState({
      clicked: nextClicked
    });
  }

  resetScore = () => {
    this.setState({
      score: 0
    });
  }

  resetHistory = () => {
    this.setState({
      clicked: []
    });
  }

  render() {
    return (
      <div>
        <Score
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <CardsContainer
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
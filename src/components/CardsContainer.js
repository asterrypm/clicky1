import React, { Component } from 'react';
import { Cards } from './Cards';
import { cards as dinosaurs } from '../cards/cards';

export class CardsContainer extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.setState({
      cards: dinosaurs
    }, () => this.shuffleCards());
  }

  shuffleCards() {
    const nextDinosaurs = this.state.cards.slice();

    nextDinosaurs.sort((a, b) => {
      return 0.5 - Math.random()
    });

    this.setState({
      cards: nextDinosaurs
    });
  }
  
  handleClick = id => {
    this.props.handleClick(id)
    this.shuffleCards();
  };

  render() {
    return (
      <div className='container'>
        <Cards
          trex={this.state.cards}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

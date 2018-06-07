import React, { Component } from 'react';
import './App.css';
import { Jumbotron } from './components/Jumbotron';
import { GameContainer } from './components/GameContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <GameContainer />
      </div>
    );
  }
}

export default App;

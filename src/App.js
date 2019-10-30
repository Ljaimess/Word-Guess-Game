import React, { Component } from 'react';
import './App.css';
import TopBar from "./Components/Topbar/topbar";
import Start from "./Components/Score/score";

class App extends Component {
  state = {
    buttonClick: false
  };

    tarotCards = ["the hanged man", "the lovers", "the star",
    "strength", "the world", "the empress"];
  
  // variables
randomWord = "";
guesses = 14;
letterToBeGuessed = [];
wrongGuesses = [];
theBlanks = 0;
toBeGuessedAndGG = [];
badGuess = []

handleClick = ()=> {
  this.randomWord = this.tarotCards[Math.floor(Math.random() * this.tarotCards.length)];
  // this.setState({
  //   buttonClick: true,
  //   disabled: true
  // })
  console.log(this.randomWord)

  // this.setState({ disabled: true });
  this.setState({ buttonClick: true });
}
  
  render() { 
    return (
      <div className="App">
      <TopBar />
      <div className="container">
          <div className="row">
            <Start button={this.state.buttonClick} handleClick={this.handleClick}>
              
          </Start>
            
        </div>
      </div>
    </div>
      );
  }
}
 
export default App ;




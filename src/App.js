import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card_list/card_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CardList cardsData={generateData()}/>
      </div>
    );
  }
}

function generateData() {
  return [
    {question: 'this is sample q 1', answer: 'sample q 1 answer', showResult: false },
    {question: 'this is sample q 2', answer: 'sample q 2 answer', showResult: false },
    {question: 'this is sample q 4', answer: 'sample q 4 answer', showResult: false },
    {question: 'this is sample q 4', answer: 'sample q 4 answer', showResult: false },
    {question: 'this is sample q 3', answer: 'sample q 3 answer', showResult: false },
    {question: 'this is sample q 5', answer: 'sample q 5 answer', showResult: false },
    {question: 'this is sample q 6', answer: 'sample q 6 answer', showResult: false },
    {question: 'this is sample q 7', answer: 'sample q 7 answer', showResult: false },
    {question: 'this is sample q 8', answer: 'sample q 8 answer', showResult: false }
  ];
}

export default App;

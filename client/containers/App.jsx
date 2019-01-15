import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Players from '../components/Players';
import Answers from '../components/Answers';


const mapStateToProps = ({ game }) => ({
  question: game.question,
  players: game.players,
  answers: game.answerCards,
});

const mapDispatchToProps = dispatch => ({
});

const App = ({ question, players, answers}) => (
  <div className="container">
    THIS IS THE GAME BOARD
    <br />
    <br />
    QUESTION:
    {question.content}
    <br />
    <br />
    PLAYERS:
    <Players players={players} />
    <br />
    <br />
    ANSWERS:
    <Answers answers={answers} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

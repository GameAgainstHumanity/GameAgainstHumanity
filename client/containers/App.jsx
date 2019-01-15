import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Players from '../components/Players';
import Answers from '../components/Answers';
import Submission from '../components/Submission';


const mapStateToProps = ({ game }) => ({
  question: game.question,
  players: game.players,
  answers: game.answerCards,
  turn: game.turn,
  submissions: game.submissions,
});

const mapDispatchToProps = dispatch => ({
});

const App = ({
  question,
  players,
  answers,
  turn,
  submissions,
}) => (
  <div className="container">
    THIS IS THE GAME BOARD
    <br />
    <br />
    PLAYERS:
    <Players players={players} />
    <br />
    <br />
    QUESTION:
    {question.content}
    <br />
    <br />
    <Submission submissions={submissions} playerLength={players.length} />
    <br />
    <br />
    ANSWER CARDS:
    <Answers answers={answers} turn={turn} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

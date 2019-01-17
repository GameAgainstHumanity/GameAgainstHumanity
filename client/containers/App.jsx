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
    <h1>Game Against Humanity</h1>
    <h2>PLAYERS:</h2>

    <Players players={players} />
    <h2>QUESTION:</h2>
    <div className="question">
      {question.content}
    </div>
    <Submission submissions={submissions} playerLength={players.length} />
    <h2>ANSWER CARDS:</h2>
    <Answers answers={answers} turn={turn} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

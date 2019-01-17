import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Players from '../components/Players';
import Cards from '../components/Cards';
import Submission from '../components/Submission';
import Join from '../components/Join';


const mapStateToProps = ({ game }) => ({
  question: game.question,
  players: game.players,
  cards: game.players,
  turn: game.players,
  submissions: game.submissions
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
    <h1>Cards Versus Humanity</h1>
    <br />
    <br />
    <Join />
    {/* <Join name={players[0].name} />
    <br/> */}

    <h3>QUESTION:</h3>
    {question.content}
    <h3>PLAYERS:</h3>
    <Players players={players} />
    {/* <Submission submissions={submissions} playerLength={players.length} /> */}
    <br />
    <br />
    <h3>CARDS IN HAND</h3>
    {/* <Cards answers={answers} turn={turn} /> */}
    {/* <Cards /> */}

  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

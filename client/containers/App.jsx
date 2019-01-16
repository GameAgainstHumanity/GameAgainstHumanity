import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Players from '../components/Players';
import Answers from '../components/Answers';
import Submission from '../components/Submission';
import { connectIo } from '../api/index';


const mapStateToProps = ({ game }) => ({
  question: game.question,
  players: game.players,
  answers: game.answerCards,
  turn: game.turn,
  submissions: game.submissions,
});

const mapDispatchToProps = dispatch => ({
});


class App extends React.Component {
  constructor(props){
    super(props);
    connectIo(message => {
      console.log(message,'App');
    });
  }
  handleClickTest() {
    socket.open();
    socket.emit('test-server', 'Hello Server');
  };

  handleClickClose() {
    socket.close();
  };
  // call our connect function and define
    // an anonymous callback function that 
    // simply console.log's the received 
    // message
  

  render(){
    return(
  <div>
       Testing Server from whence this page came
       <br/>
       <button onclick="handleClickTest()">Test WebSocket</button>
        <button onclick="handleClickClose()">Close WebSocket</button>
    
      </div>
    )
  }
}
// const App = ({
//   question,
//   players,
//   answers,
//   turn,
//   submissions,
// }) => (
//   <div className="container">
//     THIS IS THE GAME BOARD
//     <br />
//     <br />
//     PLAYERS:
//     <Players players={players} />
//     <br />
//     <br />
//     QUESTION:
//     {question.content}
//     <br />
//     <br />
//     <Submission submissions={submissions} playerLength={players.length} />
//     <br />
//     <br />
//     ANSWER CARDS:
//     <Answers answers={answers} turn={turn} />
//   </div>
// );

export default connect(mapStateToProps, mapDispatchToProps)(App);

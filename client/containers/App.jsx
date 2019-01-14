import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
});

const App = props => (
  <div className="container">
    THIS IS THE GAME BOARD
    <SignUp />
    <LogIn />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

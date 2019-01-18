"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _app = _interopRequireDefault(require("../ssr/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import store from '../../client/reducers/signupReducer';
// blank app
// import Answers from '../../client/components/Answers'
module.exports = function render(initialState) {
  // Model the initial state
  // const store = configureStore(initialState);
  var content = (0, _server.renderToString)(_react.default.createElement(_app.default, null));
  var preloadedState = {};
  return {
    content: content,
    preloadedState: preloadedState
  };
};
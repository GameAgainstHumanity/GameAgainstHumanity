"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import store from '../client/reducers/store';
var state = window.__STATE__;
delete window.__STATE__; // const store = configureStore(state);

(0, _reactDom.hydrate)(_react.default.createElement(_app.default, null), document.querySelector('#app'));
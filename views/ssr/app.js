"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react.default.createElement("div", {
    className: "homeapp"
  }, _react.default.createElement("p", {
    id: "gamename"
  }, "Game Against Humanity"), _react.default.createElement("a", {
    href: "http://localhost:3001/game"
  }, "start game"));
};

var _default = App;
exports.default = _default;
"use strict";

var express = require('express');

var path = require('path');

var WSS = require('ws').Server; // const wss = new WSS({ port: 3000 });


var app = express();

var bodyParser = require('body-parser');

var cors = require('cors');

var ssr = require('../../views/ssrutil/render.util');

var template = require('../../views/ssrutil/template'); // databases


var db = require('./db');

var PORT = 3001; // client side render

app.use('/', express.static(path.resolve(__dirname, '../../dist')));
app.use('/dist/', express.static(path.resolve(__dirname, '../../dist')));
var initialState = {};
app.use('/home', function (req, res) {
  var _ssr = ssr(initialState),
      preloadedState = _ssr.preloadedState,
      content = _ssr.content;

  var response = template('Server Rendered Page', preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.get('/questions', function (req, res) {
  db.any('SELECT * FROM questions').then(function (data) {
    res.status(200).json(data);
  }); // .catch(err => res.status(400).json({ error: 'Could not retrieve questions' }));
});
app.listen(3001, function () {
  return console.log("Listening on PORT ".concat(PORT, " swagggggg"));
});
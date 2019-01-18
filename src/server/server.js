const express = require('express');
const path = require('path');
const WSS = require('ws').Server;
// const wss = new WSS({ port: 3000 });

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const ssr = require('../../views/ssrutil/render.util');
const headerssr = require('../../views/ssrutil/header.util');
const template = require('../../views/ssrutil/template');
const clienttemplate = require('../../views/ssrutil/clienttemplate');
// databases
const db = require('./db');


const PORT = 3001;

// client side render
app.use('/', (express.static(path.resolve(__dirname, '../../dist'))));
app.use('/dist/', (express.static(path.resolve(__dirname, '../../dist'))));

// server side render app
app.use('/game', (req, res) => {
  const { preloadedState, content } = headerssr(initialState);
  const response = clienttemplate('Server Rendered Page', preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});
// server side render
const initialState = {};
app.use('/home', (req, res) => {
  const { preloadedState, content } = ssr(initialState);
  const response = template('Server Rendered Page', preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/questions', (req, res) => {
  db.any('SELECT * FROM questions')
    .then((data) => {
      res.status(200).json(data);
    });
  // .catch(err => res.status(400).json({ error: 'Could not retrieve questions' }));
});


app.listen(3001, () => console.log(`Listening on PORT ${PORT} swagggggg`));

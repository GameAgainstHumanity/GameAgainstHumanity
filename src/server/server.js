const express = require('express');
const path = require('path');
const WSS = require('ws').Server;

const wss = new WSS({ port: 3000 });

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// databases
const db = require('./db');


const PORT = 3001;


app.use('/', express.static('assets'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/questions', (req, res) => {
  db.any('SELECT * FROM questions')
    .then((data) => {
      res.status(200).json(data);
    })
    // .catch(err => res.status(400).json({ error: 'Could not retrieve questions' }));
});


app.listen(3001, () => console.log(`Listening on PORT ${PORT} swagggggg`));

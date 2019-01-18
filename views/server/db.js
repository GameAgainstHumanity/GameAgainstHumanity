"use strict";

// const pgp = require('pg-promise')();
// const dotev = require('dotenv')
// dotev.config()
// // const pgClient = new pg.Client(uri);
// // pgClient.connect();
// const pgClient = pgp(process.env.POSTGRES_URI)
//     pgClient.connect(
//         // (err) => {
//         //     if (err) console.log(error);
//         //     else console.log('Connecting to your COOL dataBase!!!')
//         // }
//     )
//     ;
// module.exports = pgClient;
require('dotenv').config();

var initOptions = {
  connect: function connect(client, dc, useCount) {
    var cp = client.connectionParameters;
    console.log('Connected to database called ' + cp.database);
  },
  disconnect: function disconnect(client, dc) {
    var cp = client.connectionParameters;
    console.log('Disconnected from database' + cp.database);
  },
  query: function query(e) {
    console.log('QUERY:' + e.query);
  },
  receive: function receive(data, result, e) {
    console.log('DATA' + data);
  }
};

var pgp = require('pg-promise')(initOptions);

var db = pgp(process.env.POSTGRES_URI);
module.exports = db;
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

require('dotenv').config()

const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log('Connected to database called ' + cp.database)
  },
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    console.log('Disconnected from database ' + cp.database)
  },
  query(e) {
    console.log('QUERY:' + e.query)
  },
  receive(data, result, e) {
    console.log('DATA' + data)
  }
}
const pgp = require('pg-promise')(initOptions);
const db = pgp(process.env.POSTGRES_URI);

module.exports = db;
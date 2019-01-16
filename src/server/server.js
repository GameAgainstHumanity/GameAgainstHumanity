// Websocket server in conjunction w/ Express
const express = require('express');
const path = require('path');
const http = require('http')

const app = express();
// create http server 
const server = http.createServer(app);

// creating websocket server **if websocket stops working add polling into transport** TESTING testSocket.html
// const webSocketServer = require('socket.io')
// .listen(server,{autoConnect: true, transport:['websocket']})

// connecting to react style
const io = require('socket.io')(server); 

const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3001


// databases 
const db = require('./db') 

// app setup
app.use('/', express.static('assets'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




// testing websocket from static location testSocket.html
// app.get('/test-client', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './testSocket.html'))
// })

// // socket setup

// webSocketServer.on('connection', (socket) => {
//     console.log('made socket connection');

      
//     socket.on('test-server', (message) =>{
//         console.log("Message revecied from client", message)
//         socket.emit('test-client', "Hello client" )
//     });

//     socket.on('disconnect', (reason) =>{
//         console.log('Socket Disconnect', reason)
//     });
//     socket.on('error', (err) =>{
//         console.log(' Socket Error', err)
//     })

// })

// This enables CORs and ensures that our frontend, 
// running on a different server can connect to our backend
io.set('origins', '*:*');
// whenever we receive a `connection` event
// our async function is then called
io.on('connection', async (socket) => {
  // we should see this printed out whenever we have
  // a successful connection
	console.log("Client Successfully Connected");

  // we then send out a new message to the
  // `chat` channel with "Hello World"
  // Our clientside should be able to see
  // this and print it out in the console
    io.emit('chat', "hello world");
    
    socket.on('error', (err) =>{
                console.log(' Socket Error', err)
            })
})


// Routes 

app.get('/questions', (req,res)=>{
    db.any('SELECT * FROM questions')
    .then(data=>{
        res.status(200).json(data)
    })
    // .catch((err)=> res.status(400).json({error:'Could not retrieve questions'}))
       
})





server.listen(PORT,() => console.log(`Listening on PORT ${PORT} swagggggg`));






















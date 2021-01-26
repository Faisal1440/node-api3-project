const express = require('express');
const server = express();

const logger = require('./middleware/logger')
const welcomeRouter = require('./routers/welcome')
const userRouter = require('./users/userRouter')

server.use(logger())
server.use(express.json())
server.use('/', welcomeRouter)
server.use('/users', userRouter)

server.get('/', function (req, res) {
    res.status(200).json ({message:`APP FINALLY DEPLOYED`});
});
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


//custom middleware



module.exports = server;

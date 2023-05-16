const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json());
app.use(express.static('public'))

io.on('connection', (socket) => {
  // get 'mouse' event
  socket.on('mouse', (data) => {
    // broadcast this same info to other sockets
    socket.broadcast.emit('otherPeople', data);
  })  
  // console.log('a user connected: ' + socket.id);
});

server.listen(3000, () => {
  console.log('the motherfucking collaborative canvas bish!!!');
});
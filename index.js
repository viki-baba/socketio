const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
   // let roomname;
    // socket.on('join room', (room) => {
    //     console.log("joinroom:"+ room);
    //     roomname = room;
       
    //  });
    socket.on('chat message', (msg) => {
       console.log(msg); 
       //console.log(roomname);
      io.emit('chat message', msg);
      //io.to(roomname).emit('chat message', msg);
    });
}); 

server.listen(3000, () => {
  console.log('listening on *:3000');
});
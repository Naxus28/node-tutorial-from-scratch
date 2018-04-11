const fs = require('fs');
const express = require('express');
const http = require('http');
const app = express();
const port = 3000;
const logFilePath = './chat.log';

/* CREATE HTTP SERVER WITH EXPRESS APP
 * create an http server based on the express app
 * we need the http server created like this to work with socket io
 */
const server = http.createServer(app)
  .listen(port, () => console.log(`Socket server running on http://localhost:${port}`));

/* CREATE THE SOCKET.IO INSTANCE USING THE HTTP/EXPRESS SERVER
 * socket.io is a function that takes the server 
 * that is listening for incoming connections
 */
const io = require('socket.io')(server);

// serve the static files
app.use(express.static('../public'));
  
  // create log file if it doesn't exist -- we are registering the chat messages on a .log file just for fun
  if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, 'CHAT LOG\n========\n\'); 
  }


/* SOCKET.IO LISTEN TO CONNECTIONS AND EMIT EVENTS
 * each 'socket' (in the param) represents an individual client connection
 * When individual clients connect we will
 * 1. emit a custom 'message' event (to which the connected client will listen)
 * 2. listen to a 'client-message' event (which will be emitted from the client when they first connect)
 *    then log that message to the server console
 * 3. a. listen to the 'chat' event sent from clients and broadcast that chat message
 *    to the entire network (all clients connected to this socket server)
 *    b. append the message to our log file
 *    
 * So here we don't send the message (as we do in the 'ws' node module), 
 * but we emit the message as a 'message' event
 * NOTE: the name of the events is customized; 
 * we could have called it 'chat-message' if we wanted to 
 */
io.on('connection', socket => {
  socket.emit('message', 'Welcome to cyber chat');

  // .on() listens for events emitted from the client
  socket.on('client-message', message => console.log(message));
  socket.on('chat', message => {
    // broadcast message to all users
    socket.broadcast.emit('message', message); 

    // log every message sent to this chat
    fs.appendFileSync(logFilePath, `\n> ${message} - ${Date()}\n`); 
  });

  // doesn't close connection completely
  // socket.on('exit', () => stream.close());
});



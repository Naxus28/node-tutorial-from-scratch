const { Server } = require('ws'); // gets the server class
const wss = new Server({ port: 3000 }); // creates an instance of the server

// listen for connections
wss.on('connection', ws => {
  // each client that connects to this server
  // will receive this message
  ws.send('Welcome to the chat');
});

console.log(`WS running on ws://localhost:3000`);
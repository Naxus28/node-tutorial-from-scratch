const { Server } = require('ws'); // gets the server class
const wss = new Server({ port: 3000 }); // creates an instance of the server

// listen for connections
// 'ws' received in the connection 
// is the web socket instance for each individual 
// client connected to this socket server
wss.on('connection', ws => {

  // this socket server is listening to messages 
  // received from the client
  ws.on('message', message => {
    if (message === 'exit') {
      // closes the specific client's connection, not the ws
      // ws will still run for other clients
      ws.close(); 
    } else {
      // wss is the instance of this server
      // which has access to all clients (array) connected to the server
      // so we loop over each client and send them the message
      // basically boradcasting the message to the entire network
      wss.clients.forEach(client => client.send(message));
    }
  });

  // each client that connects to this server
  // will receive this message
  ws.send('Welcome to the chat');
});

console.log(`WS running on ws://localhost:3000`);
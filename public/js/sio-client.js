/* GET THE CLIENT IO INSTANCE
 * the socket instance takes the server url as argument
 * in this case we are serving over the http protocol, not the ws protocol
 * (check server to se that socket.io takes the http server created with the express instance)
 */
const socket = io('http://localhost:3000'); 

// on disconnect -- this is a native socket.io event
socket.on('disconnect', () => setTitle('Disconnected from chat'));

// on connect -- this is a native socket.io event
socket.on('connect', () => {
  // emit event to the server informing this client is connected
  socket.emit('client-message', 'Client connected');
  setTitle('Connected to chat');
});

// on message -- this is a our custom event created on the server
socket.on('message', message => printMessage(message));


// send input message to the ws
document.forms[0].onsubmit = () => {
  const input = document.getElementById('message');
  const value = input.value;
  
  if (value === 'exit') {
    socket.emit('disconnect', value);
  } else {
    printMessage(value); // prints the message right away

    // when the user sends a message on the form we
    // need to use socket.io to emit that event to the server, 
    // which will broadcast the message to all users
    socket.emit('chat', value);
  }

  input.value = '';
};

const setTitle = (title) => document.querySelector('h1').innerHTML = title;

const printMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;
  document.querySelector('div.messages').appendChild(p);
};

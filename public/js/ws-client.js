// if browser suppors WebSocket
// https://caniuse.com/#feat=websockets
// 
// References:
// https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
if (WebSocket) {
  const ws = new WebSocket("ws://localhost:3000"); // native browser WebSocket class
  ws.onopen = () => setTitle("Connected to Cyber Chat");
  ws.onclose = () => setTitle("Disconnected from Cyber Chat");
  ws.onmessage = (payload) => printMessage(payload.data); // when the client receives a msg from the server

  // send input message to the ws
  document.forms[0].onsubmit = () => {
    const input = document.getElementById('message');
    ws.send(input.value); // sends the input message back to the server
    input.value = '';
  };
} else {
  printMessage('WebSocket not supported on this browser');
}


const setTitle = (title) => document.querySelector('h1').innerHTML = title;

const printMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;
  document.querySelector('div.messages').appendChild(p);
};

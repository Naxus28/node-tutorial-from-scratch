// if browser suppors WebSocket
// https://caniuse.com/#feat=websockets
if (WebSocket) {
  const ws = new WebSocket("ws://localhost:3000"); // native browser WebSocket class
  ws.onopen = () => setTitle("Connected to Cyber Chat");
  ws.onclose = () => setTitle("Disconnected from Cyber Chat");
  ws.onmessage = (payload) => printMessage(payload.data); // when the client receives a msg from the server
} else {
  printMessage('WebSocket not supported on this browser');
}

const setTitle = (title) => document.querySelector('h1').innerHTML = title;

const printMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;
  document.querySelector('div.messages').appendChild(p);
};

# web sockets with ws module [https://github.com/websockets/ws](https://github.com/websockets/ws)

Web Sockets are part of the HTML5 Spec. They allow for two way connection between client server. Web Sockets use their own protocol to send and receive messages from a TCP server.
Setting up a web socket manually can be quite involved. Fortunatelly, there are node modules such as `ws` that help us in this task.

In this exercise we use node module `ws` and the native WebSocket browser API to broadcast messages from the client to the entire network. Not all browsers have WebSocket support though so this code will not work on older browsers (the socket.io library is currently the _de facto_ web socket solution but on this lesson we will play with `ws` and the native WebSocket API).

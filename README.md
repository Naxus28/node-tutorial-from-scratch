# web sockets with socket.io [https://socket.io/get-started/chat/](https://socket.io/get-started/chat/)

Web Sockets are part of the HTML5 Spec. They allow for two way connection between client server. Web Sockets use their own protocol to send and receive messages from a TCP server.
Setting up a web socket manually can be quite involved. Fortunatelly, there are node modules such as `ws` that help us in this task.

This is the same exercise as before but using `socket.io` instead of `ws`. We are going to use `express` on the server side to work with `socket.io`.

> Socket.io requires that we include both the [server module](https://github.com/socketio/socket.io) and the [client module](https://github.com/socketio/socket.io-client).
As described in the client module's github "A standalone build of socket.io-client is exposed automatically by the socket.io server as /socket.io/socket.io.js. Alternatively you can serve the file socket.io.js found in the dist folder." So we can either install the module using npm or include a script tag on our html pointing to `/socket.io/socket.io.js` as such `<script src="/socket.io/socket.io.js"></script>`. 

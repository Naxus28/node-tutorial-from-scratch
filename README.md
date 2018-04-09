# Http [https://nodejs.org/api/http.html](), [https://nodejs.org/api/https.html](https://nodejs.org/api/https.html)

"The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses — the user is able to stream data."

Node provides the http module and the https module, to create secure servers. When working with the https module we need to provide the ssl certificate ourselves.

The code one would write to handle http and https operations in node is virtually the same.


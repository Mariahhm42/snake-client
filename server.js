const net = require("net"); //imports net for creating TCP server,
const assert = require('chai').assert;
const server = net.createServer();

// new client gets detected and greetings ensues 
server.on("connection", (client) => {
  console.log("New client connected!");
  client.write("Hello there!"); //sends hello there to the client who is connected 
  
  client.setEncoding("utf8"); // interprets the incoming data as text

  // deals with incoming messages from clients
  client.on("data", (data) => {
    console.log("Message from client: ", data); //logs any msg from client
  });
});


server.listen(3000, () => { //server starts and listens on port 3000
  console.log("Server listening on port 3000!");
});

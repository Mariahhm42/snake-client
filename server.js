const net = require("net");

const server = net.createServer(); //create the server
//listens for incoming connection on port '3000'
server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

server.on("connection", (client) => {
    console.log("New client connected!");
    client.write("Hello there!"); //sends greeting to client
  });

  client.setEncoding("utf8"); // interprets data as text
  client.on("data", (data) => {
    console.log("Message from client: ", data); //logs message received from client
  });


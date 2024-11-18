const net = require("net");

const server = net.createServer();

// Detect new client connection and send a greeting
server.on("connection", (client) => {
  console.log("New client connected!");
  client.write("Hello there!");
  
  client.setEncoding("utf8"); // interpret incoming data as text

  // Handle incoming messages from clients
  client.on("data", (data) => {
    console.log("Message from client: ", data);
  });
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

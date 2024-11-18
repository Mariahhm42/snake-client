const net = require("net");

const { IP, PORT } = require("./constants"); //imports from the constatnts module

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, port: PORT
  });

  conn.setEncoding("utf8"); // Interprets tthe data received as text

 
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // Send a message to the server once the connection is established
  conn.on("connect", () => {
    console.log("Connected to the server!"); //msg is logged after connection is successful
    conn.write("Name: MA"); //this sets's the player's name.
    conn.write("Move: up"); 

    setTimeout(() => conn.write("Move: up"), 50); //move up after 50ms
    setTimeout(() => conn.write("Move: down"), 100); //moves down after 100ms
    setInterval(() => conn.write("Move: up"), 50); // continues to Move up every 50ms
  });

  return conn;
};

// Export the connect function so it can be used in play.js
module.exports = { connect };

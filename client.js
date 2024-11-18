const net = require("net");

const { IP, PORT } = require("./constants");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 3000,
  });

  // Interpret data received as text
  conn.setEncoding("utf8");

 
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // Send a message to the server once the connection is established
  conn.on("connect", () => {
    console.log("Connected to the server!");
    conn.write("Name: MA");
    conn.write("Move: up");

    setTimeout(() => conn.write("Move: up"), 50); 
    setTimeout(() => conn.write("Move: down"), 100);

    // Experiment: Repeated moves (comment out if not testing)
    setInterval(() => conn.write("Move: up"), 50); // Moves up every 50ms
  });

  return conn;
};

// Export the connect function so it can be used in play.js
module.exports = { connect };


const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8"); //converts incoming binary data to human-readable text
  
  conn.on("connect", () => {
    console.log("Connected to the game server successfully!");
});
  conn.on("data", (data) => {
    console.log("Server says:", data); //logs messages sent by server 
  });

  return conn; //returns conn object for interaction to occur
};

console.log("Connecting ..."); //lets user know that connection is being attempted
connect(); //connect function is called to establish the connection
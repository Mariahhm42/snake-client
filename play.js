const { connect } = require("./client"); // Import the connect function from client.js
const { setupInput } = require("./input"); // Import the setupInput function from input.js


console.log("Connecting ..."); //lets user know its trying to create a connection
connect(); //to connect to game server

setupInput(); //setup input handler and connection object is passed


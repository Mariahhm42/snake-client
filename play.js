const assert = require('chai').assert;
const { connect } = require(".src/client");
 
console.log("Connecting ..."); //lets user know that connection is being attempted
connect(); //connect function is called to establish the connection
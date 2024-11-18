let connection;
// this function sets up input from users
const setupInput = function () {
    const stdin = process.stdin; // create variable to hold the stdin object so we don't have to type process.stdin multiple times
    stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
    stdin.setEncoding("utf8");// utf8 encoding is set so that we can read the text data that is input
    stdin.resume(); // resume stdin so the program can listen for input
    stdin.on("data", handleUserInput);
    return stdin; // return the stdin object so we can use it elsewhere in the progr
  };
  
//this function handles the user input
  const handleUserInput = function (key) {
    if (key === "\u0003") {
      console.log("Now exiting the game! Bye Bye!");
      process.exit(); //program get's terminated when user presses Ctrl+C
    }
    //commands to send movements instructions to the server
    if (key === 'w') connection.write("Move: up");
    if (key === 's') connection.write("Move: down");
    if (key === 'a') connection.write("Move: left");
    if (key === 'd') connection.write("Move: right");

    //commands to send user chat message to the server 
    if (key === '2') connection.write("Say: In your face!");
    if (key === '4') connection.write("Say: I'm the greatest");
    if (key === '6') connection.write("Say: Goodjob");
    if (key === '8') connection.write("Say: Yaaaay, I won!");

  };

  module.exports = { setupInput }; //exports setupInput function to play.js
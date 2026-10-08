# snake-client

A Node.js terminal client for a multiplayer Snake game, built as Project #2 at Lighthouse Labs. It connects to a game server over TCP, sends the player's name and movement commands, and lets the player send preset chat messages from the keyboard. It is a mini clone of Tania Rascia's [snek-multiplayer](https://github.com/taniarascia/snek).

## What it demonstrates

- Opening a TCP connection with Node's built-in `net` module
- Reading single keypresses from the terminal with `process.stdin` in raw mode
- Sending text commands to a server and handling the data it sends back
- Splitting code into small modules with a clear job each, and passing the connection object between them

## Controls

| Key | Action |
| --- | --- |
| `w` | Move up |
| `a` | Move left |
| `s` | Move down |
| `d` | Move right |
| `2` | Say "In your face!" |
| `4` | Say "I'm the greatest" |
| `6` | Say "Goodjob" |
| `8` | Say "Yaaaay, I won!" |
| `Ctrl+C` | Quit the game |

## Project structure

```
.
├── play.js        Entry point: connects to the server and sets up keyboard input
├── client.js      Creates the TCP connection and sends the player name on connect
├── input.js       Handles keypresses and sends Move and Say commands
├── constants.js   Server IP and port settings
├── server.js      A minimal local TCP server for testing the client
└── index.js       Exports the project's modules
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Install

```bash
git clone https://github.com/Mariahhm42/snake-client.git
cd snake-client
npm install
```

### Run

The client connects to the address set in `constants.js`, which is `localhost:3000` by default.

1. Start a server. Either:
   - run the local test server included in this repo: `node server.js`, which logs every message the client sends, or
   - run the full game server from the [snek-multiplayer](https://github.com/taniarascia/snek) repo, and change `IP` and `PORT` in `constants.js` to match it.
2. In a second terminal, start the client:

   ```bash
   node play.js
   ```

3. Use the keys in the table above to play. Press `Ctrl+C` to quit.

## Configuration

Edit `constants.js` to point the client at a different server:

```js
const IP = 'localhost';
const PORT = 3000;
```

The player name is set in `client.js` (`Name: MA`). Change it to your own initials. The game server accepts names of up to three characters.

## Author

Mariam Agboola, [@Mariahhm42](https://github.com/Mariahhm42)

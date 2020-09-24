// Requires
const express = require("express");

const songsParam = require('./songs/route.js');
const usersParam = require('./users/route.js');

// SERVER 
var server = express();
server.use(express.json());
server.listen(3030);


// LOG
console.log('Server ON!');
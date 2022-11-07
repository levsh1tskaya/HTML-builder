const process = require('process');
const readline = require('readline');
const emitter = require('events');
const stream = require('stream');
const path = require('path')

let writeableStream = fs.createWriteStream("some.txt")
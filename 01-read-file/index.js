const fs = require ('fs')
const path = require('path')
const stream = require('stream');

var directory = path.join(__dirname, 'text.txt')
var readStream = fs.createReadStream(directory)
readStream.on ('data', (chunk) => {
   console.log(chunk.toString());
})
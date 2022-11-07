const fs = require ('fs')
const readline = require('readline');
const path = require('path')

const writeStream = fs.createWriteStream (
  path.resolve(__dirname, './text.txt')
);

const rlInter = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
 });
var message = 'Приветствую!'
console.log(message)
 rlInter.setPrompt('Введите строку или нажмите "exit", чтобы выйти: ');

rlInter.on('line', (line) => {
  if (line === 'exit') {
    rlInter.close();
    return
  }

  writeStream.write(`${line}\n`);

});
rlInter.on('SIGINT', rlInter.close)

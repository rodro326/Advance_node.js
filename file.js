const fs = require('fs');
const readText = fs.readFileSync('./tests/read.txt','utf-8');
// console.log(readText);
const writtenText = fs.writeFileSync('./tests/writer.txt', readText + 'this is my wite file')
console.log(writtenText)


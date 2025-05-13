const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

// creating a server using row node.js
const server = http.createServer();



// listener
server.on('request',(req,res)=>{
  if(req.url === 'read-files' && req.method === 'GET');

  // streaming file reading
  const readableStream = fs.createReadStream(process.cwd() +'/tests/read.txt');

  readableStream.on('data',(buffer)=>{
    res.statusCode = 200;
    res.write(buffer)
  })
  readableStream.on('end',()=>{
    res.statusCode = 200;
    res.end('streaming is over')
  })
  readableStream.on('error',(error)=>{
    console.log(error)
    res.statusCode = 500;
    res.end('something wrong')
  })
 
})

server.listen(3000,()=>{
  console.log(`server is listening on the port 3000`);
})
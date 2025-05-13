// // reading a text by async way

// const fs = require('fs')

// fs.readFile('./tests/read.txt','utf-8',(err,data)=>{
//   if(err){
//     throw Error('reading error data')
//   }
//   // console.log(data);

//   fs.writeFile('./tests/write3',data,'utf-8',(err)=>{
//     if(err){
//       throw Error('writing error data')
//     }
//   })
// })


// const fs = require('fs')

// fs.readFile('./tests/read.txt','utf-8',(err,data)=>{
//   if(err){
//     throw Error('Error reading Text')
//   }
//   // console.log(data);

//   fs.writeFile('./tests/write2.txt',data, 'utf-8',(err)=>{
//     if(err){
//       throw Error('Error writing Text')
//     }

//   })
  
// })
// console.log('testing success')
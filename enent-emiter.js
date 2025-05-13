const EventEmitter = require('events');

const myEmitter = new EventEmitter()

// listener
myEmitter.on('birthday',()=>{
  console.log(`happy birthday to you`);
})

myEmitter.on('birthday',(gift)=>{
  console.log(`i will send you a gift ${gift}`)
})

myEmitter.emit('birthday','watch')

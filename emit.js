const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started');
});

eventEmitter.emit('start');

eventEmitter.on('f', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
  eventEmitter.emit('f', 1, 100);
  
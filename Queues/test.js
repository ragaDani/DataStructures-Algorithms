const Queue = require('./queuebuild');

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
//myQueue.enqueue('Pavel');
//myQueue.enqueue('Samir');
console.log(myQueue);


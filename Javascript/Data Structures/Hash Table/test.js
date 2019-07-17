const HashTable = require('./hashbuild');

const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000);
myHashTable.get('grapes');
myHashTable.set('apples',123);
myHashTable.set('oranges',1234);
console.log(myHashTable.keys());
console.log(myHashTable.set('apples',100));
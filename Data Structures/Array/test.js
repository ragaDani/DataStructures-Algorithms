const MyArray = require('./arraybuild');

var newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
//newArray.delete(1);
newArray.push('how');
newArray.push('are');
newArray.push('you');
//newArray.delete(1);
console.log(newArray);

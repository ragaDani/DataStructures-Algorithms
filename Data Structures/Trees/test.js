const BinarySearchTree = require('./treebuild');

const myTree = new BinarySearchTree();
myTree.insert(10);
myTree.insert(100);
myTree.insert(11);
myTree.insert(9);
myTree.remove(100);
console.log(myTree);
console.log(myTree.breadthFirstSearch())
console.log('DFSpre', myTree.DFSPreOrder());
console.log('DFSin', myTree.DFSInOrder());
console.log('DFSpost', myTree.DFSPostOrder());
//console.log(myTree.lookup(9));

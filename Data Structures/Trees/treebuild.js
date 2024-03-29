const TNode = require('./tNode');
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new TNode(value);
        if(this.root === null){
            this.root = newNode;
        } else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                //Left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                //Right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
            
       }
    }
    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                currentNode = currentNode.right;
            } else if(value === currentNode.value) {
                return currentNode;
            }
            
        }
        return false;
    }
    remove(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if(currentNode.value === value){
                // The real work begins!
                // Option 1: No right child:
                if(currentNode.right === null) {
                    if(parentNode === null){
                        this.root = currentNode.left;
                    }
                    else{
                        // if parent>current value, make current left child a child of parent
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left;
                        }
                        //if parent<current value, make left child a right child of parent
                        else if(currentNode.value>parentNode.value){
                            parentNode.right = currentNode.left;
                        }
                    }
                // Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null){
                    currentNode.right.left = currentNode.left;
                    if(parentNode === null){
                        this.root = currentNode.right;
                    } else {
                        // if parent > current, make right child of the left the parent
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.right;
                        }
                        // if parent < current, make right child a right child of the parent
                        else if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.right;
                        }
                    }
                    // Option 3: Right child that has a left child
                } else {
                    // find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null){
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    // leftmostParent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    // Now we prepare for the removal of currentNode
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null){
                        this.root = leftmost;
                    } else{
                        if(currentNode.value < parentNode.value){
                        parentNode.left = leftmost;
                    } else if(currentNode.value > parentNode.value){
                        parentNode.right = leftmost;
                    }

                }

            }
            return true;
        }
    }
    }
    breadthFirstSearch(){
        let currentNode = this.root;
        let list = []
        let queue = []
        queue.push(currentNode);

        while(queue.length>0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        return list;
        
        }
    breadthFirstSearchR(queue, list){
        if(!queue,length){
            return list;
        }
        let currentNode = this.queue.shift();
        list.push(currentNode.value)
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue,list);
    }
    DFSInOrder(){
        return this.traverseInOrder(this.root,[]);
    }
    DFSPostOrder(){
        return this.traversePostOrder(this.root,[]);
    }
    DFSPreOrder(){
        return this.traversePreOrder(this.root,[]);
    }
    traverseInOrder(node,list){
        if(node.left){
            this.traverseInOrder(node.left,list);
        }
        list.push(node.value);
        if(node.right){
            this.traverseInOrder(node.right,list);
        }
        return list;
    }
    traversePreOrder(node,list){
        list.push(node.value);
        if(node.left){
            this.traversePreOrder(node.left,list);
        }
        if(node.right){
            this.traversePreOrder(node.right,list);
        }
        return list;
    }
    traversePostOrder(node,list){
        if(node.left){
            this.traversePostOrder(node.left,list);
        }
        if(node.right){
            this.traversePostOrder(node.right,list);
        }
        list.push(node.value);
        return list;
    }
}


module.exports = BinarySearchTree;



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
            return null;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                currentNode = currentNode.right;
            } else {
                let swapNode;
                let rightNode = currentNode.right;
                if(!rightNode.left){
                    swapNode = rightNode;   
                } else {
                    swapNode = rightNode.left;
                }
                currentNode = swapNode;
            }
        }
        return null;
    }
}

module.exports = BinarySearchTree;
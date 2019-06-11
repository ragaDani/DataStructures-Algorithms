class HashTable {
    constructor (size) {
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i<key.length;i++) {
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }
    set(key,value) { //O(1)
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data;
    }
    get(key) { //O(1)
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i=0;i<currentBucket.length;i++) {
                if(currentBucket[i][0]===key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    keys() { //O(n)
        const keyArray = [];
        for (let i=0;i<this.data.length;i++) {
            if(this.data[i]) {
                keyArray.push(this.data[i][0][0]);
            }
        }
        return keyArray;
    }
}
module.exports = HashTable;
// const myHashTable = new HashTable(50);
// myHashTable.set('grapes',10000);
// myHashTable.get('grapes');
// myHashTable.set('apples',123);
// myHashTable.set('oranges',1234);
// console.log(myHashTable.keys());
// console.log(myHashTable.set('apples',100));
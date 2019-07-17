let user = {
    age: 28,
    name: 'hoist',
    magic: 'dark',
    scream: function() {
        console.log('ahhhhhhhh!');
    }
}
user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); //O(1)
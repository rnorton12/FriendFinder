// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

/*
var Friend = function (name, photo, scores) {
    this.uniqueID = Date.now(),
    this.name = name,
    this.photo = photo,
    this.scores = scores
};

Friend.prototype.addFriend = function (friend) {
    console.log(friend);
    friendArray.push(friend);
}

Friend.prototype.getFriendCount = function() {
    return friendArray.length;
}

Friend.prototype.findCompatibleFriend = function(friend) {
    for (var i = 0; i < friendArray.length; i++) {
        if (friend.uniqueID !== this.uniqueID) {
            console.log("check friend");
        } else {
            console.log("found self");
        }
    }
}
*/
// an array of friend objects
var friendArray = [{
    name: 'Bob',
    photo: 'my.jpg',
    'scores[]': ['1', '3', '4', '5', '3', '2', '2', '5', '2', '5']
},
{
    name: 'Jack',
    photo: 'my.jpg',
    'scores[]': ['4', '3', '4', '5', '3', '5', '2', '5', '5', '1']
},
{
    name: 'Bill',
    photo: 'my.jpg',
    'scores[]': ['1', '3', '1', '5', '3', '5', '2', '1', '5', '1']
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
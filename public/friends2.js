// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
      name: "Bob",
      photo: "my.jpg",
      scores: ["1", "3", "4", "5", "3", "2", "2", "5", "2", "5"]
  },
  {
      name: "Jack",
      photo: "my.jpg",
      scores: ["4", "3", "4", "5", "3", "5", "2", "5", "5", "1"]
  },
  {
      name: "Bill",
      photo: "my.jpg",
      scores: ["1", "3", "1", "5", "3", "5", "2", "1", "5", "1"]
  },
  {
      name: "Jason",
      photo: "my.jpg",
      scores: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;

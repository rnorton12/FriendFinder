// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold an array of friends
// ===============================================================================

var friendsData = require("../app/data/friends");

// calculate the difference between the current user's score
// and the scores of previous users to find the closest match
calcTotalDifference = function(user, candidate) {
    var totalDiff = 0;
    
    // convert current user's score from array characters to
    // an array of integers
    var userScores = user.scores.map(function (x) {
        return parseInt(x, 10);
    });

    console.log("userScores: ", userScores.join(" "));

    // convert each possible candidate's score from array characters to
    // an array of integers
    var candidateScores = candidate.scores.map(function (x) {
        return parseInt(x, 10);
    });

    console.log("candidateScores: ", candidateScores.join(" "));

    // compute the total score of each user and return it as an object
    for (var i = 0; i < userScores.length; i++) {
        totalDiff += Math.abs(userScores[i] - candidateScores[i]);
    }
    console.log("totalDiff: ", totalDiff);

    return {
        name: candidate.name,
        photo: candidate.photo,
        totalDiff: totalDiff
    };
}

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // use array.map

        var currentUser = req.body;

        console.log("currentUser: ", currentUser);

        // calculate the compatibility difference between current user and other users
        var candidateArray = [];
        for (var i = 0; i < friendsData.length; i++) {
            candidateArray.push(calcTotalDifference(currentUser, friendsData[i]));
        }

        // sort the candidate array in ascending order by compatibility difference
        candidateArray.sort(function (a, b) {
            var totalDiff1 = a.totalDiff;
            var totalDiff2 = b.totalDiff;

            if (totalDiff1 < totalDiff2) {
                //sort ascending
                return -1;
            } else if (totalDiff1 > totalDiff2) {
                return 1;
            }
            return 0; //default return value (no sorting)
        });

        for (var i = 0; i < candidateArray.length; i++) {
           console.log(candidateArray[i].name, candidateArray[i].photo, candidateArray[i].totalDiff);
        }

        // add current user to friendsData
        friendsData.push(currentUser);

        console.log("Most compatible friend: ", candidateArray[0].name, candidateArray[0].photo, candidateArray[0].totalDiff);
        res.json(candidateArray[0]);

    });
}

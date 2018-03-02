// Require the necessary packages and files
var express = require("express");
var router = express.Router();
var milkshake = require("../models/milkshake.js");

// Set up the GET route at the root to show all milkshakes in the table
router.get("/", function(req, res) {
  milkshake.selectAll(function(data) { // Calls the selectAll method on the milkshake object to retrieve all the items in the table
    var object = {
      milkshakes: data
    }; // Saves the table data into an object
    // console.log(object);
    res.render("index", object); // Send the data to the handlebars file
  });
});

// Set up the POST route to insert a milkshake in the table
router.post("/milkshakes", function(req, res) {
  milkshake.insertOne(["milkshake_name"],[req.body.name], function(result) { // Calls the insertOne method to insert the user-inputted value into the table
    res.json( {id: result.id} ); // sends the ID of the added item
  });
});

// Set up the PUT route to update the status of a milkshake based on the ID of the button that's clicked
router.put("/milkshakes/:id", function(req, res) {
  var whereCondition = "id = " + req.params.id; // Stores the ID in a string variable
  // console.log(whereCondition);

  milkshake.updateOne({ // Calls the updateOne method to update the gulped status of a milkshake based on the above ID
    gulped: req.body.gulped
  }, whereCondition, function(result) {
    if (res.changedRows === 0) {
      return res.status(404).end(); // Send error if unable to update/find the ID
    } else {
      return res.status(200).end(); // Send OK once update is completed 
    }
  })
})

module.exports = router; // Export the router
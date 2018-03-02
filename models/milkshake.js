// Require the ORM file
var orm = require("../config/orm.js");

// Create the model of a milkshake object
var milkshake = {
  selectAll: function(cb) { // Define a method to return all items in table
    orm.selectAll("milkshakes", function(res) { // Calls the ORM method on the 'milkshakes' table
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) { // Define a method to insert an item into table
    orm.insertOne("milkshakes", cols, vals, function(res) { // Calls the ORM method to insert item into the 'milkshakes' table
      cb(res);
    });
  },
  updateOne: function(colVal, whereCondition, cb) { // Define a method to update a value in the table
    orm.updateOne("milkshakes", colVal, whereCondition, function(res) { // Calls the ORM method to update item in the 'milkshakes' table
      cb(res);
    });
  }
};

module.exports = milkshake;   // Export the milkshake object so the controller can use its methods
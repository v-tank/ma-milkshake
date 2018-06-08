// Require the connection file to connect to the database
var connection = require("../config/connection.js");

// Function to print comma-separate question marks for the number of arguments passed into the function
function questionMarks(length) {
  var questionString = "";
  for (var i = 0; i < length; i++) {
    if (length === 1) {
      questionString = "?";
    } else {
      if (i == (length - 1)) {
        questionString += "?";
      } else {
        questionString += "?,"
      }
    }
  }
  return (questionString);
}

// Function to extract the key and value from an object and format into the following format : "milkshake_name = 'Super MMan'"
function extractKeyValue(obj) {
  var array = [];
  // console.log(obj);

  for (var key in obj) {
    var value = obj[key];
    // console.log(value);

    if (Object.hasOwnProperty.call(obj, key)) {
      
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      
      array.push(key + "=" + value);
    }
  }
  console.log(array.toString());
  return array.toString();
}

// Creates the ORM object with its underlying method
var orm = {
  selectAll: function(table, cb) { // Definition of a method that returns all value from a table chosen by the user
    var query = "SELECT * FROM " + table + ";"
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {  // Definition of a method that inserts values into a table; arguments include the table name, columns, values, and a callback function
    // Creates the query string
    var query = "INSERT INTO " + table + " (" + cols.toString();
    query += ") VALUES (" + questionMarks(vals.length) + ")"; 

    console.log(query);

    connection.query(query, vals, function(err, results) { // Perform the query using the values provided
      if (err) throw err;

      cb(results);
    });
  },
  updateOne: function(table, colVal, whereCondition, cb) { // Definition of a method that updates the value of an item in a table
    // Creates the query string
    var query = "UPDATE " + table + " SET " + extractKeyValue(colVal) + " WHERE " + whereCondition;

    console.log(query);

    connection.query(query, function(err, result) { // Perform the query using the values provided
      if (err) throw err;

      cb(result);
    });
  },
  delete: function (table, whereCondition, cb) {
    var query = "DELETE FROM " + table + " WHERE " + whereCondition;

    console.log(query);

    connection.query(query, function(err, result) {
      if (err) throw err;

      cb(result);
    })
  }
};

module.exports = orm; // Export the ORM object to be used by the model
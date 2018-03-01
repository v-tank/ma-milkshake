var connection = require("../config/connection.js");

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

function extractKeyValue(obj) {
  var array = [];
  for (var key in obj) {
    var value = obj[key];
 
    if (Object.hasOwnProperty.call(obj, key)) {
      
      value="'" + value + "'";
      
      array.push(key + "=" + value);
    }
  }

  return array.toString();
}

var orm = {
  selectAll: function(table, cb) {
    var query = "SELECT * FROM " + table + ";"
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var query = "INSERT INTO " + table + " (" + cols.toString();
    query += ") VALUES (" + questionMarks(vals.length) + ")";

    console.log(query);

    connection.query(query, vals, function(err, results) {
      if (err) throw err;

      cb(result);
    });
  },
  updateOne: function(table, colVal, whereCondition, cb) {
    var query = "UPDATE " + table + " SET " + extractKeyValue(obj) + "WHERE " + whereCondition;

    console.log(query);

    connection.query(query, function(err, result) {
      if (err) throw err;

      cb(result);
    });
  }
};

module.exports = orm;
// Require the mysql NPM package
var mysql = require("mysql");

var connection;

// Choose which settings to use depending on the environment (local vs. heroku)
if (process.env.JAWSDB_URL) { 
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "milkshake_db"
  });
};

// Create connection
connection.connect(function(err) {
  if (err) {
    console.log("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

module.exports = connection; // Export the connection to be used by the ORM
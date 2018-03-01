var orm = require("../config/orm.js");

var milkshake = {
  selectAll: function(cb) {
    orm.selectAll("milkshakes", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("milkshakes", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(colVal, whereCondition, cb) {
    orm.updateOne("milkshakes", colVal, whereCondition, function(res) {
      cb(res);
    });
  }
};

module.exports = milkshake;
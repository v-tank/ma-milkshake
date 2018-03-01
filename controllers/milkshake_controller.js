var express = require("express");
var router = express.Router();
var milkshake = require("../models/milkshake.js");

router.get("/", function(req, res) {
  milkshake.selectAll(function(data) {
    var object = {
      milkshakes: data
    };
    console.log(object);
    res.render("index", object);
  });
});

router.post("/milkshakes", function(req, res) {
  milkshake.insertOne(["milkshake_name"],[req.body.milkshake_name], function(result) {
    res.json( {id: result.id} );
  });
});

module.exports = router;
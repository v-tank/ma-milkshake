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
  milkshake.insertOne(["milkshake_name"],[req.body.name], function(result) {
    res.json( {id: result.id} );
  });
});

router.put("/milkshakes/:id", function(req, res) {
  var whereCondition = "id = " + req.params.id;
  // console.log(whereCondition);

  milkshake.updateOne({
    gulped: req.body.gulped
  }, whereCondition, function(result) {
    if (res.changedRows === 0) {
      return res.status(404).end();
    } else {
      return res.status(200).end();
    }
  })
})

module.exports = router;
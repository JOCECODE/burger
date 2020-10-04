const express = require("express");

const router = express.Router();

// IMPORT MODELS
const burger = require("../models/burger.js");

// TO GET ALL BURGERS FROM THE DATABASE
router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

// TO POST A NEW BURGER
router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name, devoured"], [req.body.burger_name], function (
    result
  ) {
    res.json({ id: result.insertid });
  });
});

// TO UPDATE SELECTED BURGER BOOLEAN DEVOURED
router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;

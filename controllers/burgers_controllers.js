const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

//! CREATE ALL THE ROUTES HERE SHOULD INCLUDE GET, POST, UPDATE
router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burger.create(["name"]);
});
module.exports = router;

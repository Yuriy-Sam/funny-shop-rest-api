var express = require("express");

const { goods } = require("../data.json");

var router = express.Router();

const GOODS = goods;

router.get("/", function (req, res) {
  res.send(GOODS);
});

module.exports = router;

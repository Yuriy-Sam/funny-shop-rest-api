let express = require("express");
const { categories } = require("../data.json");

let router = express.Router();

const CART_ITEMS = categories;

router.use(express.json());

router.get("/", function (req, res) {
  res.status(200).send(CART_ITEMS);
});

module.exports = router;

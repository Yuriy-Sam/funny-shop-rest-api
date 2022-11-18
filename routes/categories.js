var express = require("express");
var router = express.Router();


const CART_ITEMS = [
    {
    "name": "gadgets",
    "value": "Gadgets"
    },
    {
    "name": "computing",
    "value": "Computing"
    },
    {
    "name": "photo",
    "value": "Photo"
    },
    {
    "name": "tourism",
    "value": "Tourism"
    },
    {
    "name": "tv",
    "value": "TV"
    }
]

router.use(express.json())

router.get("/", function(req, res) {
    res.status(200).send(CART_ITEMS);
});


module.exports = router;
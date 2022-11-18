var express = require("express");
var router = express.Router();


let CART_ITEMS = []

router.use(express.json())

router.get("/", function(req, res) {
    res.status(200).send(CART_ITEMS);
});

router.post("/", function(req, res) {
    let cartItem = {...req.body}
    CART_ITEMS.push(cartItem)
    res.status(201).json(cartItem)
});

router.delete("/:id", function(req, res) {
    CART_ITEMS = CART_ITEMS.filter(item => item.id !== req.params.id )
    // CART_ITEMS = [...filteredItems]
    res.json({message: `Item with id:${req.params.id} deleted`})
});
router.put("/:id", function(req, res) {
    const idx = CART_ITEMS.findIndex(item => item.id === req.params.id)
    console.log(req.body, 'req.body')
    CART_ITEMS[idx] = req.body


    res.json(CART_ITEMS[idx])
});

module.exports = router;
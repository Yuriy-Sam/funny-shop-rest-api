var express = require("express");
var router = express.Router();


let FAVORITEITEMS = []

router.use(express.json())

router.get("/", function(req, res) {
    res.status(200).send(FAVORITEITEMS);
});
router.get("/:id", function(req, res) {
    let result = FAVORITEITEMS.filter(item => item.id === req.params.id )

    res.status(200).json(result);
});

router.post("/", function(req, res) {
    let favoriteItem = {...req.body}
    FAVORITEITEMS.push(favoriteItem)
    res.status(201).json(favoriteItem)
});

router.delete("/:id", function(req, res) {
    FAVORITEITEMS = FAVORITEITEMS.filter(item => item.id !== req.params.id )
    res.json({message:  `Item with id: ${req.params.id} deleted`})
});
router.put("/:id", function(req, res) {
    const idx = FAVORITEITEMS.findIndex(item => item.id === req.params.id)
    FAVORITEITEMS[idx] = req.body

    res.json(FAVORITEITEMS[idx])
});

module.exports = router;
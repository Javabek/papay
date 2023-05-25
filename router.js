const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.send("home sahifadasiz")
});

router.get("/menu", function(req, res) {
    res.send("menu sahifadasiz")
});

router.get("/community", function(req, res) {
    res.send("Jamiyat sahifadasiz")
});

module.exports = router;
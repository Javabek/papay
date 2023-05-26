const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController")

//memberga dahldor routerlar
router.get("/", memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);


//boshqa routerlar
router.get("/menu", function(req, res) {
    res.send("menu sahifadasiz")
});

router.get("/community", function(req, res) {
    res.send("Jamiyat sahifadasiz")
});

module.exports = router;
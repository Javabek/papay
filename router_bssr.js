const express = require("express");
const router_bssr = express.Router();
const restaruantController = require("./controllers/restaruantController")


/*******************************
 *          BSSR EJS          *
 ******************************/

//memberga dahldor routerlar

router_bssr
    .get("/signup", restaruantController.getSignUpMyRestaruant)
    .post("/signup", restaruantController.signupProcess);

router_bssr
    .get("/login", restaruantController.getLoginMyRestaruant)
    .post("/login", restaruantController.loginProcess);

router_bssr.get("/logout", restaruantController.logout);
router_bssr.get("/check-me", restaruantController.checkSessions);


router_bssr.get("/products/menu", restaruantController.getMyRestaruantData);


module.exports = router_bssr;
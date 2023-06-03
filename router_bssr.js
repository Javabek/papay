const express = require("express");
const router_bssr = express.Router();
const restaruantController = require("./controllers/restaruantController")


/*******************************
 *          BSSR EJS          *
 ******************************/
 
//memberga dahldor routerlar

router_bssr.get("/signup", restaruantController.getSignUpMyRestaruant);
router_bssr.post("/signup", restaruantController.signupProcess);

router_bssr.get("/login", restaruantController.getLoginMyRestaruant);
router_bssr.post("/login", restaruantController.loginProcess);

router_bssr.post("/logout", restaruantController.logout);




module.exports = router_bssr;
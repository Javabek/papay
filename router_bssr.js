const express = require("express");
const router_bssr = express.Router();
const restaruantController = require("./controllers/restaruantController");
const productController = require("./controllers/productController");
const uploader_product= require("./utils/upload-multer")("products");
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
router_bssr.post(
  "/products/create",
  restaruantController.validateAuthRestaruant,
  uploader_product.array("product_image", 5),
  productController.addNewProduct
);
router_bssr.post("/products/edit/:id"), productController.updateChosenProduct;

module.exports = router_bssr;

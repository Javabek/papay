const Member = require("../models/Member");
const Product = require("../models/Product");
let restaurantController = module.exports;
const assert = require("assert");
const Definer = require("../lib/mistake");

restaurantController.home = async (req, res) => {
  try {
    console.log("Get: cont/home");
    res.render("home-page");
  } catch (error) {
    console.log(`Error: cont/home, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
};
restaurantController.getMyRestaurantProducts = async (req, res) => {
  try {
    console.log("Get: cont/getMyRestaurantProducts");
    const product = new Product();
    const data = await product.getAllProductsDateResto(res.locals.member);

    res.render("restaurant-menu", { restaurant_data: data });
  } catch (err) {
    console.log(`Error: cont/getMyRestaurantProducts, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.getSignUpMyRestaurant = async (req, res) => {
  try {
    console.log("Get: cont/getSignUpMyRestaurant");
    res.render("signup");
  } catch (error) {
    console.log(`Error: cont/getSignUpMyRestaurant, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
};

restaurantController.signupProcess = async (req, res) => {
  try {
    console.log("Post: cont/signupProcess");

    assert(req.file, Definer.general_err3);

    const new_member = req.body;
    new_member.mb_type = "RESTAURANT";
    new_member.mb_image = req.file.path;

    const member = new Member();
    const result = await member.signupData(new_member);
    assert(result, Definer.general_err3);

    req.session.member = result;
    res.redirect("/resto/products/menu");
    // Session
  } catch (err) {
    console.log(`Error, cont/signupProcess, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.getLoginMyRestaurant = async (req, res) => {
  try {
    console.log("Get: cont/getLoginMyRestaruant");
    res.render("login-page");
  } catch (err) {
    console.log(`Error: cont/getSignUpMyRestaruant, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.loginProcess = async (req, res) => {
  try {
    console.log("Post: cont/loginProcess");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);

    req.session.member = result;
    req.session.save(function () {
      result.mb_type === "ADMIN"
        ? res.redirect("resto/all-restaurant")
        : res.redirect("/resto/products/menu");
    });
  } catch (err) {
    console.log(`Error, cont/loginProcess, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.logout = (req, res) => {
  try {
    console.log("GET cont/logout");
    req.session.destroy(function () {
      res.redirect("/resto");
    });
  } catch (err) {
    console.log(`Error, cont/logout, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.validateAuthRestaurant = (req, res, next) => {
  if (req.session?.member?.mb_type === "RESTAURANT") {
    req.member = req.session.member;
    next();
  } else {
    res.json({
      state: "fail",
      message: "only authenticated members with restaurant type"
    });
  }
};

restaurantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "succeed", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated" });
  }
};

const Member = require("../models/Member");
const Product = require("../models/Product");
let restaurantController = module.exports;


restaurantController.home = async (req,res) => {
  try {
    console.log("Get: cont/home");
    res.render("home-page");
  } catch (error) {
    console.log(`Error: cont/home, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
}
restaurantController.getMyRestaurantProducts = async (req, res) => {
  try {
    console.log("Get: cont/getMyRestaurantProducts");
    const product = new Product();
    const data = await product.getAllProductsDateResto(res.locals.member);

    res.render("restaruant-menu", { restaurant_data: data });
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
    console.log("Post: cont/signup");
    const data = req.body,
      member = new Member(),
      new_member = await member.signupData(data);
    req.session.member = new_member;
    res.redirect("/resto/products/menu");
    // Session
  } catch (err) {
    console.log(`Error, cont/signup, ${err.message}`);
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
    console.log("Post: cont/login");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/resto/products/menu");
    });
  } catch (err) {
    console.log(`Error, cont/login, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
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

const Member = require("../models/Member");
let restaruantController = module.exports;

restaruantController.getMyRestaruantData = async (req, res) => {
  try {
    console.log("Get: cont/getMyRestaruantData");
    //TODO: get my restaruant products

    res.render("restaruant-menu");
  } catch (err) {
    console.log(`Error: cont/getSignUpMyRestaruant, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaruantController.getSignUpMyRestaruant = async (req, res) => {
  try {
    console.log("Get: cont/getSignUpMyRestaruant");
    res.render("signup");
  } catch (error) {
    console.log(`Error: cont/getSignUpMyRestaruant, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
};

restaruantController.signupProcess = async (req, res) => {
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

restaruantController.getLoginMyRestaruant = async (req, res) => {
  try {
    console.log("Get: cont/getLoginMyRestaruant");
    res.render("login-page");
  } catch (err) {
    console.log(`Error: cont/getSignUpMyRestaruant, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaruantController.loginProcess = async (req, res) => {
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
    res.json({ state: "failed", message: err.message });
  }
};

restaruantController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};

restaruantController.validateAuthRestaruant = (req, res, next) => {
  if (req.session?.member?.mb_type === "RESTAURANT") {
    req.member = req.session.member;
    next();
  } else {
    res.json({
      state: "fail",
      message: "only authenticated members with restaruant type",
    });
  }
};

restaruantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "succeed", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated" });
  }
};

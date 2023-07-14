let memberController = module.exports;

const assert = require("assert");
const Member = require("../models/Member");

const jwt = require("jsonwebtoken");
const Definer = require("../lib/mistake");

memberController.signup = async (req, res) => {
  try {
    console.log("Post: cont/signup");
    const data = req.body,
      member = new Member(),
      new_member = await member.signupData(data);

    //TODO: Authenticate based on JWT
    const token = memberController.createToken(new_member);
    res.cookie("access_token", token, {
      maxAge: 6 * 3600 * 1000,
      httpOnly: true
    });

    res.json({ state: "succeed", data: new_member });
  } catch (err) {
    console.log(`Error, cont/signup, ${err.message}`);
  }
};

memberController.login = async (req, res) => {
  try {
    console.log("Post: cont/login");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);

    //TODO: Authenticate based on JWT
    const token = memberController.createToken(result);
    res.cookie("access_token", token, {
      maxAge: 6 * 3600 * 1000,
      httpOnly: true
    });

    res.json({ state: "succeed", data: result });
  } catch (err) {
    console.log(`Error, cont/login, ${err.message}`);
    res.json({ state: "failed", message: err.message });
  }
};

memberController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};

memberController.createToken = (result) => {
  try {
    const upload_data = {
      _id: result._id,
      mb_nick: result.mb_nick,
      mb_type: result.mb_type
    };

    const token = jwt.sign(upload_data, process.env.SECRET_TOKEN, {
      expiresIn: "6h"
    });

    assert.ok(token, Definer.auth_err2);
    return token;
  } catch (error) {
    throw err;
  }
};

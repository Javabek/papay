let memberController = module.exports;

const Member = require("../models/Member");


memberController.signup = async (req, res) => {
    try {
        console.log('Post: cont/signup');
        const data = req.body,
            member = new Member(),
            new_member = await member.signupData(data);

        res.json({ state: "succeed", data: new_member })
    } catch (err) {
        console.log(`Error, cont/signup, ${err.message}`);
    }
};

memberController.login = async (req, res) => {
    try {
        console.log('Post: cont/login');
        const data = req.body,
            member = new Member(),
            result = await member.loginData(data);

        res.json({ state: "succeed", data: result })
    } catch (err) {
        console.log(`Error, cont/login, ${err.message}`);
        res.json({ state: "failed", message: err.message })
    }
};

memberController.logout = (req, res) => {
    console.log("GET cont.logout");
    res.send("logout sahifadasiz")
};
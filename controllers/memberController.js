let memberController = module.exports;

 const Member = require("../models/Member")


memberController.signup = async (req, res) => {
    try {
        console.log('Post: cont/signup');
        const data = req.body;
        const member = new Member();
        const new_member = await member.signupData(data);

        res.json({state: "succeed", data : new_member})
    } catch (err) {
        console.log(`Error, cont/signup, ${err.message}`);
    }
}

memberController.login = (req, res) => {
    console.log("GET cont.login");
    res.send("login sahifadasiz")
}

memberController.logout = (req, res) => {
    console.log("GET cont.logout");
    res.send("logout sahifadasiz")
}
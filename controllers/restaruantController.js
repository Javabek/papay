let restaruantController = module.exports;

const Member = require("../models/Member");


restaruantController.getSignUpMyRestaruant = async (req,res)=>{
    try {
        console.log('Post: cont/getSignUpMyRestaruant');
        res.render("signup")
    } catch (error) {
        console.log(`Error: cont/getSignUpMyRestaruant, ${error.message}`);
        res.json({state: "fail", message: error.message})
    }
}

restaruantController.signupProcess = async (req, res) => {
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

restaruantController.getLoginMyRestaruant = async (req,res)=>{
    try {
        console.log('Post: cont/getSignUpMyRestaruant');
        res.render("login-page")
    } catch (error) {
        console.log(`Error: cont/getSignUpMyRestaruant, ${error.message}`);
        res.json({state: "fail", message: error.message})
    }
}

restaruantController.loginProcess = async (req, res) => {
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

restaruantController.logout = (req, res) => {
    console.log("GET cont.logout");
    res.send("logout sahifadasiz")
};
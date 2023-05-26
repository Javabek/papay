let memberController = module.exports;

memberController.home = (req,res)=> {
    console.log("GET cont.home");
    res.send("home sahifadasiz")
}

memberController.signup = (req,res)=> {
    console.log("GET cont.signup");
    res.send("signup sahifadasiz")
}

memberController.login = (req,res)=> {
    console.log("GET cont.login");
    res.send("login sahifadasiz")
}

memberController.logout = (req,res)=> {
    console.log("GET cont.logout");
    res.send("logout sahifadasiz")
}
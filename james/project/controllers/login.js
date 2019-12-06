var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var sha1 = require("sha1");

routes.get("/", function (req, res) {
    var pagedata = { pagename: "login/index", title: "Login", errorMsg : req.flash("error") };
    res.render("layout", pagedata);
});

routes.post("/", function(req, res){
    var u = req.body.username;
    var p = req.body.password;

    User.search({ email : u }, function(err, result){
        // console.log(result);
        if(result.length == 1)
        {
            if(result[0].password == sha1(p))
            {
                // console.log("success");
                res.redirect("/");
            }
            else
            {
                req.flash("error", "This Password is Incorrect");
                res.redirect("/login");
            }
        }
        else
        {
            req.flash("error", "This Username and Password is Incorrect");
            res.redirect("/login");
        }
    });

});

module.exports=routes;
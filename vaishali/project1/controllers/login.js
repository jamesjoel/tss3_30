var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");


routes.get("/", function (req, res) {
    var pagedata = { pagename: "login/index", title: "Login" , errorMsg : req.flash("error"), categoryNotShow : true };
    res.render("layout", pagedata);
});

routes.post("/", function(req, res){
    var u = req.body.username;
    var p = req.body.password;

    user.search({ email : u}, function(err, result){
        //console.log(result);
        if(result.length ==1 )
        {
            if(result[0].password == sha1(p)) //in palce of sha1(p) we write req.body.password and dont declare var p use direct req.body.password
            {
                //console.log(result);
                req.session.name=result[0].f_name;
                req.session._id=result[0]._id;
                req.session.is_user_logged_in=true;
                res.redirect("/");
            }
            else
            {
                req.flash("error", "This password is incorrect");
                res.redirect("/login");
            }
        }
        else
        {
            req.flash("error", "This Username and Password is incorrect");
            res.redirect("/login");
        }
    });
});

module.exports=routes;
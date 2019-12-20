var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var sha1 = require("sha1");


routes.get("/", function(req, res){
    pagedata = { pagename: "signup/index", title: "signup"};
    res.render("layout", pagedata);
});

routes.post("/", function(req, res){
    console.log(req.body);
    req.body.password = sha1(req.body.password);
    User.save(req.body, function(err,result){
        console.log(req.body);
        res.redirect("/login");
        
    });
});

module.exports = routes;
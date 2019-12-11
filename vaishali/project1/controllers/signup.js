var express = require("express");
var routes = express.Router();
var user = require("../models/user"); 

//var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017";
//var database = require("../config/database");

var sha1 = require("sha1");

routes.get("/", function (req, res) {
    var pagedata = { pagename: "signup/index", title: "Signup" };
    res.render("layout", pagedata);
});

routes.post("/", function(req, res){
    // console.log(req.body);
    // var obj = {full_name : req.body.f_name , email : req.body.email };

    req.body.password = sha1(req.body.password);
    user.save(req.body, function(err, result){
        res.redirect("/login");
    });
});


module.exports = routes;
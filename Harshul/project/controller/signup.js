
var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
// var MongoClient = require("mongodb").MongoClient;
// var database = require("../config/database");
var User = require("../models/user");
routes.get("/", function (req, res) {
    res.render("SignUp/index");
});

routes.post("/", function (req, res) {
    req.body.password = sha1(req.body.password);
   User.save(req.body,function(err,result){
       res.redirect("/login");
   });
});
module.exports = routes;
var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var MongoClient = require("mongodb").MongoClient;
var User = require("../../models/user");
var database = require("../../config/database");

routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "signup/index",
        title: "Signup",
    }
    res.render("layout", pagedata);
});

routes.post("/", function(req, res) {
    req.body.password = sha1(req.body.password);
    req.body.status = database.status;
    User.save(req.body, function(err, client) {
        res.redirect("/login#login");
    });
});


module.exports = routes;
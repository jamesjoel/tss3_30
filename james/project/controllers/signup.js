var express = require("express");
var routes = express.Router();
var User =  require("../models/user");
var sha1 = require("sha1");
var database = require("../config/database");

routes.get("/", function (req, res) {
    var pagedata = { pagename: "signup/index", title: "Signup", categoryNotShow: true };
    res.render("layout", pagedata);
});
routes.post("/", function(req, res){
    req.body.password = sha1(req.body.password);
    // add user status for active or deactive
    req.body.status = database.status;
    User.save(req.body, function(err, result){
        res.redirect("/login");
    });
});

module.exports=routes;
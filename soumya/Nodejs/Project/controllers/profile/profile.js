var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var User = require("../../models/user");
routes.get("/", function(req, res) {
    var id = req.session._id;
    console.log(req.session);

    User.check({ _id: mongodb.ObjectId(id) }, function(err, result) {
        console.log(result);

        var pagedata = {
            pagename: "profile/index",
            title: "My Profile",
            user: result[0]
        }
        res.render("layout", pagedata);
    });

});
routes.get("/edit", function(req, res) {
    var id = req.session._id;

    User.check({ _id: mongodb.ObjectId(id) }, function(err, result) {
        console.log(result);
        var pagedata = {
            pagename: "profile/edit",
            title: "Edit Profile",
            user: result[0]
        }
        res.render("layout", pagedata);
    });

});

routes.post("/update", function(req, res) {
    var id = req.session._id;
    delete req.body._id;

    User.update({ _id: mongodb.ObjectId(id) }, req.body, function(err, result) {

        res.redirect("/profile");

    });
});
module.exports = routes;
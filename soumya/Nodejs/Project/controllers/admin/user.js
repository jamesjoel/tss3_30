var express = require("express");
var routes = express.Router();
var User = require("../../models/user");

routes.get("/", function(req, res) {
    User.check({}, function(err, result) {
        var pagedata = {
            pagename: "admin/user/index",
            title: "All Users",
            user: result
        }
        res.render("admin_layout", pagedata);
    });
});

module.exports = routes;
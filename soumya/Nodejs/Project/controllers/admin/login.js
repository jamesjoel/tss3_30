var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var Admin = require("../../models/admin");


routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "admin/login/index",
        title: "Admin Panel",
        msg: req.flash("error")
    }
    res.render("admin_layout", pagedata);
});
routes.post("/", function(req, res) {
    // console.log(req.body);
    var u = req.body.username;
    var p = req.body.password;

    Admin.check({ username: u }, function(err, result) {
        // console.log(result);
        if (result.length == 1) {

            if (result[0].password == sha1(p)) {

                req.session.a_id = result[0]._id;
                req.session.a_name = result[0].name;
                req.session.is_admin_logged_in = true;
                // console.log(req.session);
                res.redirect("/admin/dashboard");
            } else {
                req.flash("error", "This Password Is Incorrect");
                res.redirect("/admin");
            }
        } else {
            req.flash("error", "This Username And Password Is Incorrect");
            res.redirect("/admin");
        }
    });

});

module.exports = routes;
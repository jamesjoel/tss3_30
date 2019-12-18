var express = require("express");
var routes = express.Router();
var User = require("../../models/user");
var sha1 = require("sha1");
routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "login/index",
        title: "Login Page",
        errMsg: req.flash("error")
    }
    res.render("layout", pagedata);
});

routes.post("/", function(req, res) {
    // console.log(req.body);
    var username = req.body.email;
    var pass = req.body.password;
    User.check({ email: username }, function(err, result) {
        // console.log(result);
        if (result.length == 1) {

            if (result[0].password == sha1(pass)) {
                req.session.name = result[0].f_name;
                req.session._id = result[0]._id;
                req.session.is_user_logged_in = true;
                res.redirect("/");
            } else {
                req.flash("error", "This Password is Incorrect");
                res.redirect("/login#login");
            }

        } else {
            req.flash("error", "This Username and Password is Incorrect");
            res.redirect("/login#login");
        }
    });
});


module.exports = routes;
var express = require("express");
var routes = express.Router();
var Admin = require("../../models/admin");
var sha1 = require("sha1");


routes.get("/", function(req, res){
    pagedata = { pagename : "admin/login/index", title : "Admin login", msg : req.flash("error")};
    res.render("admin_layout", pagedata);
});

routes.post("/", function(req, res){
    var e = req.body.adminName;
    var p = req.body.password;

    Admin.search({a_name: e}, function(err, result){

        if(result.length == 1)
        {
            if(result[0].a_password == sha1(p))
            {
                req.session.a_name = result[0].a_name;
                req.session.a_id = result[0]._id;
                req.session.admin_logged_in = true;
                res.redirect("/admin/dashboard");

            }
            else {
                req.flash("error", "password is incorrect");
                res.redirect("/admin");
            }
            
            }
            else {
                req.flash("error", "invalid mail and password");
                res.redirect("/admin");
        }
    });
});


module.exports = routes;
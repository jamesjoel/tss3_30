var express = require("express");
var routes = express.Router();
var Admin = require("../../models/admin");
var sha1 = require("sha1");


routes.get("/", function(req, res){
    var pagedata = { title : "Admin Login", pagename : "admin/login/index", msg : req.flash("error")};
    res.render("admin_layout", pagedata);
});

routes.post("/", function(req, res){
    var u = req.body.username;
    var p = req.body.password;
    Admin.search({ username : u}, function(err, result){
        if(result.length==1)
        {
            if(result[0].password == sha1(p))
            {
                req.session.a_id = result[0]._id;
                req.session.a_name = result[0].name;
                req.session.is_admin_logged_in=true;
                res.redirect("/admin/dashboard");
            }
            else
            {
                req.flash("error", "This Password is Incorrect");
                res.redirect("/admin");
            }
        }
        else{
            req.flash("error", "This Username and Password is Incorrect");
            res.redirect("/admin");
        }

    });

});




module.exports = routes;
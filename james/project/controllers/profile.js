var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var mongodb = require("mongodb");
var sha1 = require("sha1");

routes.get("/", function (req, res) {
    var id = req.session._id;
    User.search({ _id : mongodb.ObjectId(id)}, function(err, result){

        var pagedata = { pagename: "profile/index", title : "Profile", user : result[0], msg : req.flash("msg") };
        res.render("layout", pagedata);
    });
});
routes.get("/changepassword", function (req, res) {
    var pagedata = { pagename: "profile/changepass", title: "Profile", errorMsg : req.flash("msg") };
    res.render("layout", pagedata);

});

routes.post("/changepassword", function(req, res){
    // console.log(req.body);
    var a = req.body.c_pass;
    var b = req.body.n_pass;
    var c = req.body.cn_pass;
    var id = req.session._id;
    User.search({ _id : mongodb.ObjectId(id)}, function(err, result){
        if(result[0].password == sha1(a))
        {
            if(b == c)
            {
                User.update({ _id : mongodb.ObjectId(id)}, { password :  sha1(b)}, function(err, result){
                    req.flash("msg", "Your Password has been changed");
                    res.redirect("/profile");
                });
            }
            else
            {
                req.flash("msg", "Password and New Password does not match !");
                res.redirect("/profile/changepassword");
            }
        }
        else
        {
            req.flash("msg", "Current Password does not match !");
            res.redirect("/profile/changepassword");
        }
    });



});

module.exports=routes;
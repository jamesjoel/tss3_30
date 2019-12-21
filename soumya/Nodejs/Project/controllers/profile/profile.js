var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var User = require("../../models/user");
var sha1 = require("sha1");
routes.get("/", function(req, res) {
    var id = req.session._id;
    console.log(req.session);

    User.check({ _id: mongodb.ObjectId(id) }, function(err, result) {
        console.log(result);

        var pagedata = {
            pagename: "profile/index",
            title: "My Profile",
            user: result[0],
            msg: req.flash("msg")
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
routes.get("/changepwd",function(req,res){
    var pagedata = {
        pagename: "profile/changepwd",
        title: "Change Password",
        msg: req.flash("msg")
    }
    res.render("layout",pagedata);
});

routes.post("/changepwd",function(req,res){
    // console.log(req.body);
    var id = req.session._id;
    var a = req.body.c_pass;
    var b = req.body.n_pass;
    var c = req.body.cn_pass;
    User.check({_id : mongodb.ObjectId(id)},function(err,result){
        // console.log(result);
        // return;
        if(result[0].password == sha1(a)){
            if(b == c){
                User.update({_id: mongodb.ObjectId(id)},{password: sha1(b)},function(err,result){
                    req.flash("msg","Your Password has been changed");
                    res.redirect("/profile");
                });
            }else{
                req.flash("msg","New Password and Confirm Password does not match !");
                res.redirect("/profile/changepwd");
            }
        }else{
            req.flash("msg","Current Password is Incorrect");
            res.redirect("/profile/changepwd");
        }
    });
});
module.exports = routes;
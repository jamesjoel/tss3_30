var express = require("express");
var routes = express.Router();
var user =require("../models/user");
var mongodb=require("mongodb");
var sha1 = require("sha1");

routes.get("/", function (req, res) {
    var id = req.session._id;
    user.search({_id: mongodb.ObjectId(id)},function( err,result){
        var pagedata = { pagename: "profile/index", title : "Profile" , user: result[0] ,msg: req.flash("msg")};
        res.render("layout", pagedata);
    });
});

routes.get("/edit", function (req, res) {
    var id = req.session._id;
    user.search({_id: mongodb.ObjectId(id)},function( err,result){
        var pagedata = { pagename: "profile/edit", title : " Edit Profile" , user: result[0] };
        res.render("layout", pagedata);
    });
});

routes.get("/changepwd", function (req, res) {
    var pagedata = { pagename: "profile/changepwd", title: "Profile", errormsg : req.flash("msg") };
    res.render("layout", pagedata);

});

routes.post("/changepwd",function(req,res){
    var a = req.body.c_pass;
    var b = req.body.n_pass;
    var c = req.body.cn_pass;
    var id = req.session._id;
    user.search({_id:mongodb.ObjectId(id)},function(err,result){
        if(result[0].password == sha1(a))
        {
            if(b == c)
            { //why run line number 40 amd 41 
                user.update({_id : mongodb.ObjectId(id)},{password: sha1(b)},function(err,result){
                req.flash("msg","Your Password has been changed");
                res.redirect("/profile");
                });
            }   
           else
            {
                req.flash("msg","Password and New password does not match !");
                res.redirect("/profile/changepwd");
            }

        }
        else
        {
            req.flash("msg","Current password does not match !");
                res.redirect("/profile/changepwd");
        }
        
    });
});

module.exports=routes;
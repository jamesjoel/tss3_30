var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var sha1 = require("sha1");


routes.get("/", function(req, res){
    var pagedata = {pagename : "login/index", title: "login", errorMsg : req.flash("error")};
    res.render("layout", pagedata);

});

routes.post("/", function(req, res){
    // console.log(req.body);
    var e = req.body.email;
    var p = req.body.password;
    console.log(e);
    console.log(p);
    User.search({email: e}, function(err,result){
        console.log(result);
        if(result.length == 1){
            if(result[0].password == sha1(p)){
                req.session.name=result[0].u_name;
                req.session._id = result[0]._id;
                req.session.user_logged_in=true;
                res.redirect("/");
                
            }
            else{
            req.flash("error","Your Password is Incorrect");
            res.redirect("/login");
            }

        }else{
            req.flash("error","Your Username and Password is Incorrect");
            res.redirect("/login");
        }
    });

});

module.exports=routes;


var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");

routes.get("/" , function(req,res){
var pagedata ={pagename: "login/index",title: "login",errorMsg: req.flash("error")};
res.render("layout",pagedata);
});

routes.post("/" , function(req,res){
    
    
    var u = req.body.email;
    var p = req.body.password;

    user.search( { email:u }, function(err,result){
        if( result.length==1)
          
            {
                if(result[0].password == sha1(p))
                {
                    req.session.name = result[0].f_name;
                    req.session._id = result[0].id;
                    req.session.is_user_logged_in=true;
                    res.redirect("/");
                }

            else
            {
                req.flash("error","This  password is incorrect");
                res.redirect("/login");
            }
        }
        else
        {
            req.flash("error","This username and password is incorrect");
            res.redirect("/login");
        }         
    });
});


 module.exports=routes;
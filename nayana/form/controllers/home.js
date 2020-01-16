var express = require("express");
var routes = express.Router();
var User =  require("../models/user");
var database = require("../config/database");

routes.get("/", function (req, res) {
    var pagedata = { pagename: "home/index", title: "form",};
    res.render("layout", pagedata);
});
routes.post("/", function(req, res){
    console.log(req.body);
     var u = req.body.u_hobby;
    
    
    var c = req.body.cricket;
    var f = req.body.football;
    var b = req.body.basketball;
    var m = req.body.music;
    var o = req.body.other;
    var arr = [c,f,b,m,o];
    var u = arr;
   
    

    console.log(u);

    User.save(req.body, function(err, result){
        console.log(result);

        res.redirect("/");
    });
});

module.exports=routes;  


  
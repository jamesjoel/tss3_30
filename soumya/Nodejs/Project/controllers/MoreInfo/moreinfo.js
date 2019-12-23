var express = require("express");
var routes = express.Router();

routes.get("/",function(req,res){
    var pagedata = {
        pagename: "MoreInfo/index",
        title: "More Info"
    }
    res.render("layout",pagedata);
});

routes.get("/buynow",function(req,res){
    var pagedata = {
        pagename: "MoreInfo/congrats",
        title: "Successfully"
    }
    res.render("layout",pagedata);
});


module.exports = routes;

var express = require("express");
var routes = express.Router();


routes.get("/", function(req,res){
    var pagedata = {pagename:"offer/index",title: "offer and sales"};
    res.render("layout",pagedata);
});
module.exports=routes;
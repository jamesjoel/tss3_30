var express = require("express");
var routes = express.Router();




routes.get("/", function(req,res){
    var pagedata = {pagename:"About us/index",title: "About Page"};
    res.render("layout",pagedata);
});
module.exports=routes;
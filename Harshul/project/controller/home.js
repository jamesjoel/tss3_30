var express = require("express");
var routes = express.Router();
var Product = require("../models/product");

routes.get("/", function(req,res){
    Product.search({},function(err,result){
        var pagedata = {pagename:"Home_page/index",title: "Home" , product: result};
        res.render("layout",pagedata);
    });
});
module.exports=routes;
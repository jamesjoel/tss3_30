var express = require("express");
var routes = express.Router();
var Product = require("../models/product");


routes.get("/", function(req, res){
    Product.addFieldsDiscount(function(err, result){
        var pagedata = { pagename : "home/index", title : "Home", product : result };
        res.render("layout", pagedata);

    });
    

    // var pagedata = { pagename: "home/index", title: "Home", product: [] };
    // res.render("layout", pagedata);

});

module.exports=routes;
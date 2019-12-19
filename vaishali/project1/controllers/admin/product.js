var express = require("express");
var routes = express.Router();

var Product = require("../../models/product");
var Category = require("../../models/category");

var mongodb = require("mongodb");

routes.get("/", function(req, res){
    Category.search({}, function(err, result){
    var pagedata = {title: "Product", pagename:"admin/product/index", category: result};
    res.render("admin_layout", pagedata);
    
    });
});

routes.post("/", function(req, res){
    req.body.product_price = parseInt(req.body.product_price);
    req.body.product_discount = parseInt(req.body.product_discount);
    Product.insert(req.body, function(err, result){
        
            res.redirect("/admin/product/view");
        });
    });

routes.get("/view", function(req, res){
    Product.search({}, function(err, result){
        var pagedata = {title: "View Product", pagename: "admin/product/view", product: result};
        res.render("admin_layout", pagedata);
    });
});

routes.get("/delete/:id", function(req, res){
    console.log(req.query);
    var a = req.params.id;
    Product.delete({ _id : mongodb.ObjectId(a)}, function(err, result){
        res.redirect("/admin/product/view");
    });
});


module.exports = routes;
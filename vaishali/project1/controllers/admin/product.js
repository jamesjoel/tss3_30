var express = require("express");
var routes = express.Router();

var product = require("../../models/product");
var category = require("../../models/category");


routes.get("/", function(req, res){
    category.search({}, function(err, result){
    var pagedata = {title: "Product", pagename:"admin/product/index", category: result};
    res.render("admin_layout", pagedata);
    
    });
});

routes.post("/", function(req, res){
    req.body.product_price = parseInt(req.body.product_price);
    req.body.product_discount = parseInt(req.body.product_discount);
    product.insert(req.body, function(err, result){
        //console.log(result.ops[0]._id);
            res.redirect("/admin/product/view");
        });
    });

routes.get("/view", function(req, res){
    Product.search({}, function(err, result){
        var pagedata = {title: "View Product", pagename: "admin/product/view", product: result};
        res.render("admin_layout", pagedata);
    });
});

module.exports = routes;
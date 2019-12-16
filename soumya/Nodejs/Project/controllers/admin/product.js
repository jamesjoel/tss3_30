var express = require("express");
var routes = express.Router();
// var database = require("../../config/database");
// var MongoClient = require("mongodb").MongoClient;
var Product = require("../../models/product");
var Category = require("../../models/category");
var mongodb = require("mongodb");

routes.get("/view", function(req, res) {
    Product.check({}, function(err, result) {
        var pagedata = {
            pagename: "admin/product/view",
            title: "Product View",
            Product: result
        }
        res.render("admin_layout", pagedata);
    });
});

routes.get("/delete/:id", function(req, res) {
    //req.query also can be use but this function is not help SEO 
    var id = req.params.id; //is use Function Because help SEO  
    Product.Delete({ _id: mongodb.ObjectId(id) }, function(err, result) {
        res.redirect("/admin/product/view");
    });
});

routes.get("/edit/:id", function(req, res) {
    // console.log(req.params);
    var id = req.params.id;
    Product.check({ _id: mongodb.ObjectId(id) }, function(err, result) {
        // console.log(result);
        var pagedata = { title: "Edit Category", pagename: "admin/product/edit", product: result[0] };
        res.render("admin_layout", pagedata);
    });
});



routes.get("/", function(req, res) {
    Category.check({}, function(err, result) {
        var pagedata = {
            pagename: "admin/product/index",
            title: "Products",
            categories: result
        }
        res.render("admin_layout", pagedata);
    });
});

routes.post("/", function(req, res) {

    req.body.product_price = parseInt(req.body.product_price);
    req.body.product_discount = parseInt(req.body.product_discount);

    Product.save(req.body, function(err, result) {
        res.redirect("/admin/product/view");
    });


});
module.exports = routes;
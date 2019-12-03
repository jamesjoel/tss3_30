var express = require("express");
var routes = express.Router();
var database = require("../../config/database");
var MongoClient = require("mongodb").MongoClient;
var Product = require("../../models/product");
routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "admin/product/index",
        title: "Products"

    }
    res.render("admin_layout", pagedata);
});

routes.post("/", function(req, res) {

    req.body.product_price = parseInt(req.body.product_price);
    req.body.product_discount = parseInt(req.body.product_discount);

    Product.save(req.body, function(err, result) {
        res.redirect("/admin/product");
    });


});
module.exports = routes;
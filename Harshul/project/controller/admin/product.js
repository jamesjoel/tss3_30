var express = require("express");
var routes = express.Router();
var product = require("../../models/product");
var category = require("../../models/categories");


routes.get("/", function (req, res) {
    category.search({}, function (err, result) {
        var pagedata = { pagename: "admin/Product/index", title: "Product" ,categories: result };
        res.render("admin_layout", pagedata);
    });
});

routes.post("/", function (req, res) {
    req.body.product_price = parseInt(req.body.product_price);
    req.body.product_discount = parseInt(req.body.product_discount);
    product.insert(req.body, function (err, result) {
        res.redirect("/admin/product/views");

    });

});

routes.get("/views", function (req, res) {
    product.search({}, function (err, result) {
        var pagedata = { pagename: "admin/product/views", title: "View Product", product: result };
        res.render("admin_layout", pagedata);

    });
});
module.exports = routes;
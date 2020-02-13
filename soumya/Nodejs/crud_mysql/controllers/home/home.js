var express = require("express");
var routes = express.Router();
var Product = require("../../models/product");
routes.get("/", function(req, res) {
    Product.check({}, function(err, result) {
        var pagedata = {
            pagename: "home/index",
            title: "ShoppingMall.com",
            product: result
        }
        res.render("layout", pagedata);
    });
});



module.exports = routes;
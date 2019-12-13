var express = require("express");
var routes = express.Router();
var database = require("../../config/database");
var MongoClient = require("mongodb").MongoClient;
var Category = require("../../models/category");
routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "admin/category/index",
        title: "Categories"
    }
    res.render("admin_layout", pagedata);
});

routes.get("/view", function(req, res) {
    Category.check({}, function(err, result) {
        var pagedata = {
            pagename: "admin/category/view",
            title: "Category View",
            Category: result
        }
        res.render("admin_layout", pagedata);
    });
})

routes.post("/", function(req, res) {
    Category.save(req.body, function(err, client) {
        res.redirect("/admin/category/view");
    });
});


module.exports = routes;
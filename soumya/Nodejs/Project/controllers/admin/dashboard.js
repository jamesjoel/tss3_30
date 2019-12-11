var express = require("express");
var routes = express.Router();
var database = require("../../config/database");
var MongoClient = require("mongodb").MongoClient;

routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "admin/dashboard/index",
        title: "Products"
    }
    res.render("admin_layout", pagedata);
});


module.exports = routes;
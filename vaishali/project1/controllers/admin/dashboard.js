var express = require("express");
var routes = express.Router();

var product = require("../../models/product");

routes.get("/", function(req,res){
    var pagedata = {title: "Admin Dashboard", pagename: "admin/dashboard/index"};
    res.render("admin_layout", pagedata);

});

module.exports = routes;
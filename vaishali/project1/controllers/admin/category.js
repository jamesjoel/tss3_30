var express = require("express");
var routes = express.Router();
var category = require("../../models/category");

routes.get("/", function(req, res){
    var pagedata = {title: "category", pagename: "admin/category/index"};
    res.render("admin_layout", pagedata);
});

routes.post("/", function(req,res){
    //console.log(req.body)
    category.save(req.body, function(err, result){
        res.redirect("/admin/category/view");
    });
});

routes.get("/view", function(req, res){
    category.search({}, function(err, result){
        var pagedata = { title: "view category", pagename: "admin/category/view", category: result };
        res.render("admin_layout", pagedata);
    });
});

module.exports = routes;
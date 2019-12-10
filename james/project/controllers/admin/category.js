var express = require("express");
var routes = express.Router();
var Category = require("../../models/category");


routes.get("/", function (req, res) {
    var pagedata = { title: "Category", pagename: "admin/category/index" };
    res.render("admin_layout", pagedata);
});

routes.post("/", function(req, res){
    // console.log(req.body);
    Category.save(req.body, function(err, result){
        res.redirect("/admin/category");
    });
});

module.exports = routes;
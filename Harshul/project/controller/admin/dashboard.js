var express = require("express");
var routes = express.Router();

var product = require("../../models/product");

routes.get("/",function(req,res){
    var pagedata={pagename:"admin/dashboard/index",title: "Admin Dashboard"};
    res.render("admin_layout",pagedata);
});

routes.post("/",function(req,res){
    categories.save(res.body,function(err,result){
        res.redirect("/admin/categories");

    });
});

module.exports =routes;
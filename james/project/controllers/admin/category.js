var express = require("express");
var routes = express.Router();
var Category = require("../../models/category");
var mongodb = require("mongodb");

routes.get("/", function (req, res) {
    var pagedata = { title: "Category", pagename: "admin/category/index" };
    res.render("admin_layout", pagedata);
});

routes.post("/", function(req, res){
    // console.log(req.body);
    Category.save(req.body, function(err, result){
        res.redirect("/admin/category/view");
    });
});


routes.get("/view", function(req, res){
    Category.lookupFind(function(err, result){
        console.log("----------", result);
        var pagedata = { title: "View Category", pagename: "admin/category/view", category : result };
        res.render("admin_layout", pagedata);
    });
    
    
});

routes.get("/edit/:id", function(req, res){
    // console.log(req.params);
    var id = req.params.id;
    Category.search({ _id : mongodb.ObjectId(id)}, function(err, result){
        // console.log(result);
        var pagedata = { title: "Edit Category", pagename: "admin/category/edit", category: result[0] };
        res.render("admin_layout", pagedata);
    });
});

routes.post("/update", function(req, res){
    // console.log(req.body);
    var id = req.body.id;
    delete req.body.id;
    Category.update({ _id : mongodb.ObjectId(id)}, req.body, function(err, result){
        res.redirect("/admin/category/view");
    });
});
module.exports = routes;
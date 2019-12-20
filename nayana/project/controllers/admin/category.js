var express = require("express");
var routes = express.Router();
var Category = require("../../models/category");
var mongodb = require("mongodb");

routes.get("/", function(req, res){
    var pagedata = {pagename : "admin/category/index", title : "Category"};
    res.render("admin_layout", pagedata);
});

routes.post("/", function(req, res){
    console.log(req.body);
    Category.save(req.body, function(err, result){
         res.redirect("/admin/category/views");
    });

});

routes.get("/views",function(req, res){
    Category.search({}, function(err, result){
        // console.log(result);
        var pagedata = {pagename : "admin/category/views", title : "View Category" , category: result};
        res.render("admin_layout", pagedata);
    });
});


routes.get("/edit/:id", function(req, res){
    // console.log(req.params);
    var id = req.params.id;
    Category.search({_id : mongodb.ObjectId(id)}, function(err,result){
        console.log(result);
        
        var pagedata = {pagename : "admin/category/edit", title : "Update Category", category: result[0]};
        res.render("admin_layout", pagedata);
    });

});

routes.post("/update", function(req, res){
    // console.log(req.body);
    var id = req.body.id;
    delete req.body.id;
    Category.update({ _id : mongodb.ObjectId(id)}, req.body, function(err, result){
        // console.log(result);
    
        res.redirect("/admin/category/views");
    });
});

module.exports = routes;


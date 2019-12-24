var express = require("express");
var routes = express.Router();
var categories = require("../../models/categories");
var mongodb = require("mongodb");

routes.get("/", function (req, res) {
    var pagedata = { pagename: "admin/categories/index", title: "categories" };
    res.render("admin_layout", pagedata);
});

routes.post("/", function (req, res) {
    categories.save(req.body, function (err, result) {
        res.redirect("/admin/categories/views");
    });
});

routes.get("/views", function (req, res) {
    categories.search({}, function (err, result) {
        // console.log(result);
        var pagedata = { pagename: "admin/categories/views", title: "categories", categories: result };
        res.render("admin_layout", pagedata);

    });
});

routes.get("/edit/:id", function (req, res) {
    var id = req.params.id;
    categories.search({_id : mongodb.ObjectId(id)}, function (err, result) {
        var pagedata = { pagename: "admin/categories/edit", title: " Edit categories", category: result[0] };
        res.render("admin_layout", pagedata);




    });
});


routes.get("/delete/:id",function(req,res){
     var a = req.params.id;
     categories.delete({_id : mongodb.ObjectId(a)},function(err,result){
         res.redirect("/admin/categories/views");
     });
});

routes.post("/update", function(req, res){
    // console.log(req.body);
    var id = req.body.id;
    delete req.body.id;
    categories.update({_id:mongodb.ObjectId(id)},req.body,function(err,result){
        res.redirect("/admin/categories/views");
    });
});



module.exports = routes;
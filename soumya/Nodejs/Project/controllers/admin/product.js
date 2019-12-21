var express = require("express");
var routes = express.Router();
var Product = require("../../models/product");
var Category = require("../../models/category");
var mongodb = require("mongodb");
var path = require("path");
var random = require("randomstring");

routes.get("/view", function(req, res) {
    Product.check({}, function(err, result) {
        var pagedata = {
            pagename: "admin/product/view",
            title: "Show Product",
            Product: result
        }
        res.render("admin_layout", pagedata);
    });
});

routes.get("/delete/:id", function(req, res) {
    //req.query also can be use but this function is not help SEO 
    var id = req.params.id; //is use Function Because help SEO  
    Product.Delete({ _id: mongodb.ObjectId(id) }, function(err, result) {
        res.redirect("/admin/product/view");
    });
});

routes.get("/edit/:id", function(req, res) {
    // console.log(req.params);
    var id = req.params.id;
    Category.check({}, function(err, result1) {
        console.log(result1);
        Product.check({ _id: mongodb.ObjectId(id) }, function(err, result2) {
            console.log(result2);
            var pagedata = { title: "Edit Product", pagename: "admin/product/edit", product: result2[0], category: result1 };
            res.render("admin_layout", pagedata);
        });
    });
});

routes.post("/update", function(req, res) {
    // console.log(req.body);
    var id = req.body.product_id;
    delete req.body.product_id;
    Product.update({ _id: mongodb.ObjectId(id) }, req.body, function(err, result) {
        res.redirect("/admin/product/view");
    });
});


routes.get("/", function(req, res) {
    Category.check({}, function(err, result) {
        var pagedata = {
            pagename: "admin/product/index",
            title: "Add Product",
            categories: result
        }
        res.render("admin_layout", pagedata);
    });
});

routes.post("/", function(req, res) {
    // console.log(req.files);
    var randomstring = random.generate(25);
    var image = req.files.image;
    var size = image.size;
    var filename = image.name;
    var arr = filename.split(".");
    var extention = arr[arr.length-1];
    var newName = randomstring+"."+extention;
    UploadPath = path.resolve()+"/public/uploads/"+newName;

    if(extention == "jpg" || extention == "jpeg" || extention == "png" || extention4r == "gif"){
       
       if(size <= 1024*1024){

           image.mv(UploadPath,function(err){
               req.body.product_price = parseInt(req.body.product_price);
               req.body.product_discount = parseInt(req.body.product_discount);
               req.body.image = newName;
               Product.save(req.body, function(err, result) {
                   res.redirect("/admin/product/view");
               });
           });
       }else{
        req.flash("msg","This File Is Too Large");
        res.redirect("/admin/product");   
       }
    }else{
        req.flash("msg","This File Type Is Not Allowed");
        res.redirect("/admin/product");
    }
});
module.exports = routes;
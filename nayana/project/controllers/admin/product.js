var express = require("express");
var routes = express.Router();
 
var Category = require("../../models/category");
var Product = require("../../models/product");

var mongodb = require("mongodb");
var path = require("path");
var random = require("randomstring");

routes.get("/", function (req, res) {
    Category.search({}, function(err, result){
        var pagedata = {pagename: "admin/product/index",title: "Product", category : result, errorMsg : req.flash("msg")};
        res.render("admin_layout", pagedata);

    });
});

routes.post("/", function(req, res){
    var ran = random.generate(25);
    var image = req.files.product_image;
    var size = image.size;
    var filename = image.name;
    var arr = filename.split(".");
    var ext = arr[arr.length - 1];
    var newName = ran+ "." + ext;
    var uploadPath = path.resolve()+"/public/upload/"+ newName;
    
    if(ext =="jpg" || ext == "gif" || ext == "png" || ext == "jpeg")
    {
        if(size <= (1024*1024))
        {
            image.mv(uploadPath, function(err){
            req.body.product_price = parseInt(req.body.product_price);
            req.body.product_discount = parseInt(req.body.product_discount);
            req.body.image = newName;

            Product.insert(req.body, function(err, result){
                    res.redirect("/admin/product/views");
                });
            });
        }
        else
        {
            req.flash("msg", "This File is Too large");
            res.redirect("/admin/product");
        }
    }
    else
    {
        req.flash("msg", "This File Type Not Allowed");
        res.redirect("/admin/product");
    }
});
routes.get("/views", function(req, res){
    Product.search({}, function(err, result){
        var pagedata = { title: "View Product", pagename: "admin/product/views", product : result };
        res.render("admin_layout", pagedata); 

    });
});

routes.get("/delete/:id", function(req, res){
    // console.log(req.query);
    var a = req.params.id;
    Product.delete({ _id : mongodb.ObjectId(a) }, function(err, result){
        res.redirect("/admin/product/views");
    });
});
routes.get("/edit/:id", function(req, res){
    var a = req.params.id;
    Category.search({}, function(err, result1){

        Product.search({ _id : mongodb.ObjectId(a)}, function(err, result2){
            // console.log(result);
            var pagedata = { title: "Edit Product", pagename: "admin/product/edit", product: result2[0], category : result1 };
            res.render("admin_layout", pagedata); 
        });
    });
});

routes.post("/update", function(req, res){
    var id = req.body.id;
    delete req.body.id;
    Product.update({ _id : mongodb.ObjectId(id)}, req.body, function(err, result){
        res.redirect("/admin/product/views");
    });
});
module.exports = routes;
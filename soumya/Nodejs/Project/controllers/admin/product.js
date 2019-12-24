var express = require("express");
var routes = express.Router();

var Product = require("../../models/product");
var Category = require("../../models/category");

var mongodb = require("mongodb");
var path = require("path");
var uploadfunc = require("../../helpers/uploadfunc");
var fs = require("fs");

routes.get("/view", function (req, res) {
    Product.check({}, function (err, result) {
        var pagedata = {
            pagename: "admin/product/view",
            title: "Show Product",
            Product: result,
            errorMsg : req.flash("msg")
        }
        res.render("admin_layout", pagedata);
    });
});

routes.get("/delete/:id", function (req, res) {
    //req.query also can be use but this function is not help SEO 
    var id = req.params.id; //is use Function Because help SEO 
    Product.check({ _id: mongodb.ObjectId(id) }, function (err, result) {
        console.log(result);
        var imagename = result[0].image;
        var delPath = path.resolve() + "/public/uploads/" + imagename;
        fs.unlink(delPath, function (err) {
            Product.Delete({ _id: mongodb.ObjectId(id) }, function (err, result) {
                res.redirect("/admin/product/view");
            });
        });
    });
});

routes.get("/edit/:id", function (req, res) {
    // console.log(req.params);
    var id = req.params.id;
    Category.check({}, function (err, result1) {
        console.log(result1);
        Product.check({ _id: mongodb.ObjectId(id) }, function (err, result2) {
            console.log(result2);
            var pagedata = { title: "Edit Product", pagename: "admin/product/edit", product: result2[0], category: result1 };
            res.render("admin_layout", pagedata);
        });
    });
});

routes.post("/update", function (req, res) {
    // console.log(req.body);
    var id = req.body.product_id;
    delete req.body.product_id;
    Product.update({ _id: mongodb.ObjectId(id) }, req.body, function (err, result) {
        res.redirect("/admin/product/view");
    });
});


routes.get("/", function (req, res) {
    Category.check({}, function (err, result) {
        var pagedata = {
            pagename: "admin/product/index",
            title: "Add Product",
            categories: result
        }
        res.render("admin_layout", pagedata);
    });
});

routes.post("/", function (req, res) {
    // console.log(req.files);
    var image = req.files.image;
    var size = image.size;
    var return_value = uploadfunc(image.name);
    var newName = return_value[0];
    var extention = return_value[1];
    UploadPath = path.resolve() + "/public/uploads/" + newName;

    if (extention == "jpg" || extention == "jpeg" || extention == "png" || extention4r == "gif") {

        if (size <= 1024 * 1024) {

            image.mv(UploadPath, function (err) {
                req.body.product_price = parseInt(req.body.product_price);
                req.body.product_discount = parseInt(req.body.product_discount);
                req.body.image = newName;
                Product.save(req.body, function (err, result) {
                    res.redirect("/admin/product/view");
                });
            });
        } else {
            req.flash("msg", "This File Is Too Large");
            res.redirect("/admin/product");
        }
    } else {
        req.flash("msg", "This File Type Is Not Allowed");
        res.redirect("/admin/product");
    }
});

routes.post("/upload", function (req, res) {
   
    var id = req.body.id;
    var image = req.files.image;
    var size = image.size;
    var return_value = uploadfunc(image.name);
    var imgname = return_value[0];
    var ext = return_value[1];
    var UploadPath = path.resolve() + "/public/uploads/" + imgname;
    if (ext == "jpg"|| ext == "jpeg"|| ext == "png"|| ext == "gif") {
        if (size <= 1024*1024) {
            Product.check({_id : mongodb.ObjectId(id)},function(err,result){
               var OldImageName = result[0].image;
               var DelPath = path.resolve()+"/public/uploads/"+OldImageName;
               fs.unlink(DelPath,function(err){

                   image.mv(UploadPath,function(err){
                           Product.update({_id: mongodb.ObjectId(id)},{image : imgname},function(err,result){
                               res.redirect("/admin/product/view");
                           });
                   });
               });
            });

        } else {
            req.flash("msg", "This File is Too Large");
            res.redirect("/admin/product/view");
        }
    }else{
        req.flash("msg", "This File Type not allowed");
        res.redirect("/admin/product/view");
    }
});

module.exports = routes;
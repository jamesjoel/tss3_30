var express = require("express");
var routes = express.Router();
var product = require("../../models/product");
var category = require("../../models/categories");
var mongodb = require("mongodb");
var path = require("path");
var random = require("randomstring");
var changename= require("../../helpler/changename");
var fs = require("fs")



routes.get("/", function (req, res) {
    category.search({}, function (err, result) {
        var pagedata = { pagename: "admin/Product/index", title: "Product", categories: result,errorMsg : req.flash("msg") };
        res.render("admin_layout", pagedata);
    });
});

routes.post("/", function (req, res) {
    
    var image = req.files.image;
    var size = image.size;
    var imgdata = changename(image.name);
    var exit = imgdata[1];
    var newname=imgdata[0];
    
   
    var uploadPath = path.resolve() + "/public/upload/" + newname;
    if (exit == "jpg" || exit == "gif" || exit == "png" || exit == "jpeg") {
        if (size <= (1024 * 1024)) {
            image.mv(uploadPath, function (err) {
                req.body.product_price = parseInt(req.body.product_price);
                req.body.product_discount = parseInt(req.body.product_discount);
                req.body.image = newname;
                product.insert(req.body, function (err, result) {
                    res.redirect("/admin/product/views");
                });
            });
        }

        else {
            req.flash("msg", "This file is too large");
            res.redirect("/admin/product")
        }
    }

    else {
        req.flash("msg", "This file type is not Allowed");
        res.redirect("/admin/product")
    }

});



routes.get("/views", function (req, res) {
    product.search({}, function (err, result) {
        var pagedata = { pagename: "admin/product/views", title: "View Product", product: result , errorMsg : req.flash("msg") };
        res.render("admin_layout", pagedata);

    });
});

routes.get("/delete/:id", function (req, res) {
    // console.log(req.query);
    var a = req.params.id;
    product.search({_id: mongodb.ObjectId(a)},function(err,result){
        var imagename=result[0].image;
        var delpath = path.resolve()+"/public/upload/"+imagename;
        fs.unlink(delpath,function(err){ 
            product.delete({ _id: mongodb.ObjectId(a) }, function (err, result) {
                res.redirect("/admin/product/views");         
         });
       });
    });
 });

routes.get("/edit/:id", function (req, res) {
    var a = req.params.id;
    category.search({}, function (err, result1) {
        console.log(result1);
        product.search({ _id: mongodb.ObjectId(a) }, function (err, result2) {
            console.log(result2);
            var pagedata = { pagename: "admin/product/edit", title: " edit Product", product: result2[0], categories: result1 };
            res.render("admin_layout", pagedata);
        });
    });
});


routes.post("/update", function (req, res) {
    // console.log(req.query);
    var id = req.body.id;
    delete req.body.id;
    product.update({ _id: mongodb.ObjectId(id) }, req.body, function (err, result) {
        res.redirect("/admin/product/views");
    });
});

routes.post("/upload",function(req,res){
    var id = req.body.id;
    var image = req.files.image;
    var size = image.size;
    var imagdata= changename(image.name);
    var uploadPath = path.resolve() + "/public/upload/" + imagdata[0];
    
    if(imagdata[1] == "jpg" || imagdata[1] == "jpeg" || imagdata[1] == "pnb" || imagdata[1] == "gif")
    {
        if(size <=(1024*1024))
        {
            image.mv(uploadPath,function(err){
                product.update({_id: mongodb.ObjectId(id)},{image:imagdata[0]},function(err,result){
                    res.redirect("/admin/product/views");

                });
            });
        }
        else
        {
            req.flash("msg", "This File is Too large");
            res.redirect("/admin/product/views");
        }

        }

        else
        {
            req.flash("msg", "This File is Too large");
            res.redirect("/admin/product/views");
        } 
});



module.exports = routes;
var express = require("express");
var routes = express.Router();

var Product = require("../../models/product");
var Category = require("../../models/category");

var mongodb = require("mongodb");
var path = require("path");
var changename = require("../../helpers/changename");
var fs = require("fs");



routes.get("/", function (req, res) {
    Category.search({}, function(err, result){
        var pagedata = { title: "Product", pagename: "admin/product/index", category : result, errorMsg : req.flash("msg") };
        res.render("admin_layout", pagedata);

    });
});




routes.post("/", function(req, res){
    // console.log(req.files);
    var image = req.files.image;
    var size = image.size;


    var imgData = changename(image.name);

    var ext = imgData[1];
    var newName = imgData[0];


    var uploadPath = path.resolve()+"/public/upload/"+newName;

    if(ext =="jpg" || ext == "gif" || ext == "png" || ext == "jpeg")
    {
        if(size <= (1024*1024))
        {
            image.mv(uploadPath, function(err){
            req.body.product_price = parseInt(req.body.product_price);
            req.body.product_discount = parseInt(req.body.product_discount);
            req.body.image = newName;

            Product.insert(req.body, function(err, result){
                    res.redirect("/admin/product/view");
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
    




    // image.mv(uploadPath, function(err){
    //     console.log("uploaeded .....");
    // });


    
});

routes.get("/view", function(req, res){
    Product.search({}, function(err, result){
        var pagedata = { title: "View Product", pagename: "admin/product/view", product : result, errorMsg : req.flash("msg") };
        res.render("admin_layout", pagedata); 

    });
});
routes.get("/delete/:id", function(req, res){
    // console.log(req.query);
    var a = req.params.id;

    // fs.unlink();
    Product.search({ _id : mongodb.ObjectId(a)}, function(err, result){
        // console.log(result);
        var imgname = result[0].image;
        var delPath = path.resolve() + "/public/upload/" +imgname;
        fs.unlink(delPath, function(err){
            Product.delete({ _id: mongodb.ObjectId(a) }, function (err, result) {
                
                res.redirect("/admin/product/view");
            });
        });
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
        res.redirect("/admin/product/view");
    });
});


routes.post("/upload", function(req, res){
    var id = req.body.id;
    var image = req.files.image;
    var size = image.size;
    var imgData = changename(image.name);
    var uploadPath = path.resolve() + "/public/upload/" + imgData[0];

    if(imgData[1]=="jpg" || imgData[1]=="jpeg" || imgData[1]=="png" || imgData[1]=="gif")
    {
        if(size <= (1024*1024))
        {
            image.mv(uploadPath, function(err){
                Product.update({ _id : mongodb.ObjectId(id) }, { image : imgData[0] }, function(err, result){
                    res.redirect("/admin/product/view");
                });
            });
        }
        else
        {
            req.flash("msg", "This File is Too large");
            res.redirect("/admin/product/view");
        }
    }
    else
    {
        req.flash("msg", "This File Type not allowed");
        res.redirect("/admin/product/view");
    }

});




module.exports = routes;